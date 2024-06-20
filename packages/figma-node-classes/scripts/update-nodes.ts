import Parser from '@readme/openapi-parser';
import { createConsola } from 'consola';
import { compile } from 'ejs';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { type ClassDefinition, type DocumentObject, type ReferenceObject, type SchemaObject } from './types';
import { getPackagePath } from './utils/get-package-path';
import { resolveMembers } from './utils/resolve-members';
import { typerefsCache } from './utils/typerefs-cache';

const logger = createConsola({
  formatOptions: {
    date: false,
  },
});

const templateStr = readFileSync(resolve('./scripts/class-template.ejs'), 'utf-8');
const template = compile(templateStr, { beautify: true });
const figmaRestApiSpecPackagePath = getPackagePath('@figma/rest-api-spec');
if (!figmaRestApiSpecPackagePath) {
  logger.error(`Couldn't find '@figma/rest-api-spec'`);
  process.exit(1);
} else {
  logger.success(`Found '@figma/rest-api-spec' package in ${figmaRestApiSpecPackagePath}.`);
}

const openApiPath = resolve(figmaRestApiSpecPackagePath, 'openapi/openapi.yaml');

if (!existsSync(openApiPath)) {
  logger.error(`'openapi.yaml' file not found in '@figma/rest-api-spec' package!`);
} else {
  logger.success(`Found 'openapi.yaml' file in ${openApiPath}.`);
}

async function init(fileName: string) {
  const parsed = (await Parser.parse(openApiPath)) as DocumentObject;
  const $refs = await Parser.resolve(openApiPath);
  const getMembers = resolveMembers($refs);
  const parsedSchemas: Record<string, SchemaObject | ReferenceObject> = parsed.components?.schemas!;
  const nodeKeys = Object.keys(parsedSchemas).filter((key) => key !== 'SubcanvasNode' && key !== 'Node' && key.endsWith('Node'));

  logger.success(`Found ${nodeKeys.length} node types (excluding SubcanvasNode and Node)`);
  logger.info(`Generating classes for ${nodeKeys.join(', ')}`);

  const definitions: ClassDefinition[] = nodeKeys.map((name) => {
    const members = getMembers(parsedSchemas[name]).sort((a, b) => a.name.localeCompare(b.name));

    return {
      name,
      type: members.find(member => member.name === 'type')?.enum?.[0],
      hasChildren: !!members.find(member => member.name === 'children'),
      members,
    };
  });

  typerefsCache.delete('SubcanvasNode')
  typerefsCache.delete('CanvasNode')

  const time = new Date().toISOString()

  const templateData = {
    time,
    definitions,
    nodeKeys,
    imports: Array.from(typerefsCache),
  }

  const fileContents = template(templateData)

  const outputFileName = resolve(fileName);

  if (!existsSync(dirname(outputFileName))) {
    mkdirSync(dirname(outputFileName), { recursive: true });
  }

  writeFileSync(outputFileName, fileContents);
  execSync('yarn format ');

  logger.success(`Node classes successfully written in ${resolve(fileName)}.`);
}

init(resolve('./src/index.ts'));

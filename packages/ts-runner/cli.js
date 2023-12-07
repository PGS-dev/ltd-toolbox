#!/usr/bin/env node

const { dirname, join, resolve } = require('path');
const { existsSync } = require('fs');
const { config } = require('dotenv');
const { pathToFileURL } = require('url');
const { spawn } = require('child_process');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const closestFile = (filename, path = process.cwd()) => {
  const filepath = join(path, filename);

  if (filepath === filename) return null;

  if (existsSync(filepath)) return filepath;

  const nextDir = dirname(path);

  return closestFile(filename, nextDir !== path ? nextDir : '');
};

const rootPackageJson = closestFile('package.json', dirname(require.main.path));

// Load env variables

// .env.defaults in root dir
const defaultEnvPath = resolve(dirname(rootPackageJson), '.env');
config({ path: defaultEnvPath });

const localEnvPath = resolve(dirname(rootPackageJson), '.env.local');
config({ path: localEnvPath });

config({ path: closestFile('.env'), override: true });

config({ path: closestFile('.env.local'), override: true });

if (args.mode) {
  const defaultEnvPath = resolve(dirname(rootPackageJson), `.env.${args.mode}`);
  config({ path: defaultEnvPath, override: true });

  const modeEnvPath = closestFile(`.env.${args.mode}`);
  config({ path: modeEnvPath, override: true });
}

// run script with tsx loader

const loaderPath = pathToFileURL(require.resolve('tsx')).toString();
const preflightPath = require.resolve('tsx/preflight');

spawn(process.execPath, ['--require', preflightPath, '--loader', loaderPath, args._], {
  stdio: [
    'inherit', // stdin
    'inherit', // stdout
    'inherit', // stderr
    'ipc', // parent-child communication
  ],
  env: { ...process.env },
});

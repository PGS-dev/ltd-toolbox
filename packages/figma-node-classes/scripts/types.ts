import { OpenAPIV3 } from 'openapi-types';

export type SchemaObject = OpenAPIV3.SchemaObject;
export type ReferenceObject = OpenAPIV3.ReferenceObject;
export type DocumentObject = OpenAPIV3.Document;

export const isObject = (value: unknown): value is object => !!value && value.constructor.name === 'Object';
export const isReferenceObject = (value: object): value is OpenAPIV3.ReferenceObject => value && isObject(value) && '$ref' in value;
export const isArrayObject = (value: object): value is OpenAPIV3.ArraySchemaObject => value && isObject(value) && 'type' in value && value.type === 'array';
export const isNonArrayObject = (value: object): value is OpenAPIV3.NonArraySchemaObject => value && isObject(value) && 'type' in value && ['boolean', 'object', 'number', 'string', 'integer'].includes(value.type as string);
export const hasAllOf = (value: object): value is OpenAPIV3.BaseSchemaObject => value && isObject(value) && 'allOf' in value && Array.isArray(value.allOf);
export const hasProperties = (value: object): value is OpenAPIV3.SchemaObject & { properties: Record<string, OpenAPIV3.SchemaObject> } => value && isObject(value) && 'properties' in value;

export type ClassMember = OpenAPIV3.SchemaObject & {
  name: string;
  optional?: boolean;
  typeRef?: string;
};

export type ClassDefinition = {
  name: string;
  members: ClassMember[];
};

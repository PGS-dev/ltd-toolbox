import type Parser from '@readme/openapi-parser';
import { hasAllOf, isNonArrayObject, isReferenceObject, type ClassMember, type ReferenceObject, type SchemaObject } from '../types';
import { getMembersDefinitions } from './get-members-definitions';

export const resolveMembers = ($ref: Parser.$Refs) => {
  const resolve = (parsed: SchemaObject | ReferenceObject): ClassMember[] => {
    const out: ClassMember[][] = [];

    if (!hasAllOf(parsed)) return [];

    parsed.allOf?.forEach((object) => {
      if (isNonArrayObject(object) && object.properties) {
        const members = getMembersDefinitions(object);
        out.push(members);
      }

      if (isReferenceObject(object)) {
        const props = $ref.get(object.$ref);
        const referencedMembers = getMembersDefinitions(props);
        out.push(referencedMembers);
        if (isReferenceObject(object) && hasAllOf(props)) {
          const deepProps = resolve(props);

          out.push(deepProps);
        }
      }
    });

    return out.flat();
  };

  return resolve;
};

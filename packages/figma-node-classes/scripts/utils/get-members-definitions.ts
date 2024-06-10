import { hasProperties, isReferenceObject, type ClassMember, type SchemaObject } from '../types';
import { getTypeNamefromRef } from './get-type-name-from-ref';

export const getMembersDefinitions = (object: SchemaObject): ClassMember[] => {
  if (!hasProperties(object)) return [];
  return Object.entries(object.properties)
    .map(([propName, def]) => {
      let typeRef = getTypeNamefromRef(def);

      if (propName === 'type' && !def.enum) return;

      if (def.oneOf) {
        typeRef = def.oneOf
          .map((type) => {
            if (isReferenceObject(type)) return getTypeNamefromRef(type);
            return type.type;
          })
          .join(' | ');
      }

      if (def.type === 'string' && 'enum' in def) {
        typeRef = def.enum?.map((opt) => `'${opt}'`).join(' | ');
      }

      if (def.type === 'array' && def.items) {
        typeRef = `${getTypeNamefromRef(def.items)}[]`;
      }

      if (!def.type && !typeRef) {
        typeRef = 'any';
      }

      return {
        name: propName,
        ...def,
        optional: !object.required?.includes(propName),
        ...(typeRef && { typeRef }),
      } as ClassMember;
    })
    .filter(Boolean) as ClassMember[];
};

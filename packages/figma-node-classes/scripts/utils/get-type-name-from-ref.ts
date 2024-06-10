import { isReferenceObject } from '../types';
import { typerefsCache } from './typerefs-cache';

export const getTypeNamefromRef = (ref: object) => {
  if (isReferenceObject(ref)) {
    const typeName = ref.$ref.split('/').at(-1);
    typerefsCache.add(typeName);
    return typeName;
  }
};

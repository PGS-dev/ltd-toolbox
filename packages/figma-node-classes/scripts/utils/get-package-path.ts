import { createRequire } from 'node:module';
import { dirname } from 'node:path';

export const getPackagePath = (packageName: string) => {
  try {
    const require = createRequire(import.meta.url);
    const packagePath = require.resolve(`${packageName}/package.json`);
    return dirname(packagePath);
  } catch (e) {
    return;
  }
};

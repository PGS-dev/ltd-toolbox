import { createConsola } from 'consola';

export const logger = createConsola({
  level: 3,
  formatOptions: {
    date: false,
  },
}).withTag('FigmaParser');

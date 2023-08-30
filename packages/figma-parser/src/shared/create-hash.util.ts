import { createHash } from 'node:crypto'

export const hashData = (data: any): string => createHash('md5').update(data).digest('hex')

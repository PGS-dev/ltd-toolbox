import { createHash } from 'crypto'

export const hashData = (data: any): string => createHash('md5').update(data).digest('hex')

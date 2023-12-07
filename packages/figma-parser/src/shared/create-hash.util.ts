import { createHash } from "crypto";

export const hashData = (data: string): string =>
  createHash("md5").update(data).digest("hex");

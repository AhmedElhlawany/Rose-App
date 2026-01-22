import { z } from 'zod';

export const verifySchema = z.object({
  resetCode: z
    .string()
    .length(6, 'OTP must be 6 digits')
});

export type VerifyCodeSchemaType = z.infer<typeof verifySchema>;

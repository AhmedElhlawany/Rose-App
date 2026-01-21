import z from 'zod';

export const resetSchema = z
  .object({
    password: z
      .string()
      .nonempty(' your password is required')
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .refine((password) => /[A-Z]/.test(password), {
        message: 'Password must contain at least one uppercase letter.',
      })
      .refine((password) => /[a-z]/.test(password), {
        message: 'Password must contain at least one lowercase letter.',
      })
      .refine((password) => /[0-9]/.test(password), {
        message: 'Password must contain at least one number.',
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: 'Password must contain at least one special character.',
      }),
    newPassword: z.string().nonempty(' your Confirm Password is required'),
  })
  .refine((data) => data.password === data.newPassword, {
    message: 'Passwords do not match',
    path: ['newPassword'],
  });
export type ResetPasswordFormFields = z.infer<typeof resetSchema>;

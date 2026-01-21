import z from 'zod';

// Validation Forgot Schema
export const forgotSchema = z.object({
  email: z.email({
    error: (issue) => (issue.input ? 'Invalid email' : 'Email is required'),
  }),
});
export type ForgotPasswordFormFields = z.infer<typeof forgotSchema>;

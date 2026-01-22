'use client';

import { VerifyResetFields } from '@/lib/types/auth/verify';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useVerifyPassword } from '../_hooks/use-verify-password';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { verifySchema } from '@/lib/schema/verify-passwoerd';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import SubmitButton from '@/components/features/auth/submit-button';

export default function VerifyPasswordForm() {
  const t = useTranslations('auth');
  const { isPending, error, verifyResetCode } = useVerifyPassword();

  const form = useForm<VerifyResetFields>({
    resolver: zodResolver(verifySchema),
    defaultValues: { resetCode: '' },
  });

  const onsubmit: SubmitHandler<VerifyResetFields> = async (values) => {
    verifyResetCode(values);
  };

  return (
    <section className="lg:max-w-auth mx-auto flex min-h-screen w-full max-w-[25.375rem] flex-col justify-center gap-6 px-6 sm:w-[70%] lg:px-0">
      <div className="flex flex-col border-b border-zinc-200 pb-3">
        <h1 className="text-xl font-semibold dark:text-zinc-50">
          {t('verifyPassword.title')}
        </h1>
        <p className="text-sm dark:text-zinc-50">
          {t('verifyPassword.description')}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
          <FormField
            control={form.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    value={field.value}
                    onChange={(value) =>
                      /^\d*$/.test(value) && field.onChange(value)
                    }
                  >
                    {[...Array(6)].map((_, i) => (
                      <InputOTPGroup key={i}>
                        <InputOTPSlot index={i} />
                      </InputOTPGroup>
                    ))}
                  </InputOTP>
                </FormControl>

                <FormDescription className="text-end text-base font-medium text-zinc-800">
                  {t('verifyPassword.resendOtp')}
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton
            isSubmitting={form.formState.isSubmitting}
            isValid={form.formState.isValid}
            error={error}
            isPending={isPending}
            text="verifyPassword.submit"
            title="verifyPassword.Contact"
            loading="verifyPassword.loading"
          />
        </form>
      </Form>
    </section>
  );
}

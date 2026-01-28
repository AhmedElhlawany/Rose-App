'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import SubmitButton from '@/components/features/auth/submit-button';

import {
  ResetPasswordFormFields,
  resetSchema,
} from '@/lib/schemas/reset-password';
import { ResetPasswordPayload } from '@/lib/types/auth/forget-password/reset';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useResetPassword } from '../_hooks/use-reset-password';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utility/tailwind-merge';

export default function ResetPasswordForm() {
  // Treanslation
  const t = useTranslations('auth');

  // Hook
  const locale = useLocale();
  const { error, isPending, resetpassword } = useResetPassword();
  // State
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Form
  const form = useForm({
    mode: 'all',
    resolver: zodResolver(resetSchema(t)),
    defaultValues: {
      newPassword: '',
      password: '',
    },
  });

  // !! To be handled by the flow owner when get search params from verfiy password componnent and delete static email
  // Const
  const params = useSearchParams();
  const email = params.get('email') || 'hadywahba19@gmail.com';

  // Function
  const onsubmit: SubmitHandler<ResetPasswordFormFields> = (data) => {
    const payload: ResetPasswordPayload = {
      email: email,
      newPassword: data.newPassword,
    };
    resetpassword(payload);
  };

  return (
    <section className="lg:max-w-auth mx-auto flex min-h-screen w-full max-w-[25.375rem] flex-col justify-center gap-6 px-6 sm:w-[70%] lg:px-0">
      {/* Title Part */}
      <div className="flex flex-col border-b-[.0625rem] border-zinc-200">
        <h1 className="text-xl font-semibold text-zinc-800 first-letter:uppercase dark:text-zinc-50 sm:text-2xl">
          {t('reset-password.create-new-password')}
        </h1>
        <p className="pb-3 text-sm font-normal text-zinc-800 first-letter:capitalize dark:text-zinc-50 sm:text-base">
          {t('reset-password.reset-text')}
        </p>
      </div>

      {/* Form  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
          <div className="space-y-3">
            {/* Password Field */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('reset-password.form.password.old-password')}
                  </FormLabel>
                  {/* Field */}
                  <FormControl>
                    <div className="relative">
                      {/* Input */}
                      <Input
                        {...field}
                        placeholder={'********'}
                        className="w-full text-black placeholder:text-zinc-400 dark:text-zinc-50"
                        type={cn(showOldPassword ? 'password' : 'text')}
                      />
                      <div>
                        <Button
                          variant={'carousel'}
                          onClick={() => setShowOldPassword((prev) => !prev)}
                          type="button"
                          className={cn(
                            'absolute top-1/2 size-5 -translate-y-1/2',
                            locale === 'ar' ? 'left-0' : 'right-0',
                          )}
                        >
                          {showOldPassword ? (
                            <EyeOff className="size-5 text-zinc-400 dark:text-zinc-500" />
                          ) : (
                            <Eye className="size-5 text-zinc-400 dark:text-zinc-500" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </FormControl>

                  {/* Feedلاack */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="newPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('reset-password.form.password.new-password')}
                  </FormLabel>
                  {/* Field */}
                  <FormControl>
                    {/* Input */}
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder={'********'}
                        className="w-full text-black placeholder:text-zinc-400 dark:text-zinc-50"
                        type={cn(showNewPassword ? 'password' : 'text')}
                      />
                      <div>
                        <Button
                          variant={'carousel'}
                          onClick={() => setShowNewPassword((prev) => !prev)}
                          type="button"
                          className={cn(
                            'absolute top-1/2 size-5 -translate-y-1/2',
                            locale === 'ar' ? 'left-0' : 'right-0',
                          )}
                        >
                          {showNewPassword ? (
                            <EyeOff className="size-5 text-zinc-400 dark:text-zinc-500" />
                          ) : (
                            <Eye className="size-5 text-zinc-400 dark:text-zinc-500" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Toggle Password Button */}
                  </FormControl>

                  {/* Feedلاack */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Submit Button */}
          <SubmitButton
            isSubmitting={form.formState.isSubmitting}
            isValid={form.formState.isValid}
            text="reset-password.form.submit.reset"
            error={error}
            isPending={isPending}
            title="reset-password.form.submit.contact"
            loading="forget-password.form.submit.loading"
          />
        </form>
      </Form>
    </section>
  );
}

//  <div className="space-y-3">
//           {/* Password section */}
//           <PasswordField
//             register={register}
//             errors={formState.errors}
//             label="reset-password.form.password.old-password"
//             name="password"
//             placeholder="********"
//           />

//           {/* Confirm Password section */}
//           <PasswordField
//             errors={formState.errors}
//             register={register}
//             label="reset-password.form.password.new-password"
//             name="newPassword"
//             placeholder="********"
//           />
//         </div>

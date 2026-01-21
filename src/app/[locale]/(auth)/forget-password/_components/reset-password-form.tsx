'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import PasswordField from '@/components/features/auth/auth-fields/password-field';
import SubmitButton from '@/components/features/auth/submit-button';
import { UseResetPassword } from '../_hooks/use-reset-password';
import {
  ResetPasswordFormFields,
  resetSchema,
} from '@/lib/schemas/reset-password';
import { ResetPasswordPayload } from '@/lib/types/auth/forget-password/reset';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ResetPasswordForm() {
  // Treanslation
  const t = useTranslations('auth');

  // Hook
  const { error, isPending, resetpassword } = UseResetPassword();

  // Form
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    resolver: zodResolver(resetSchema),
    defaultValues: {
      newPassword: '',
      password: '',
    },
  });

  // !! To be handled by the flow owner when get search params from verfiy password componnent and delete static email
  // Const
  const params = new URLSearchParams(location.search);
  const email = params.get('email') || 'hadywahba19@gmail.com';

  // Function
  const onsubmit: SubmitHandler<ResetPasswordFormFields> = async (data) => {
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

      {/* Form Part */}
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="space-y-3">
          {/* Password section */}
          <PasswordField
            register={register}
            errors={formState.errors}
            label="reset-password.form.password.old-password"
            name="password"
            placeholder="********"
          />

          {/* Confirm Password section */}
          <PasswordField
            errors={formState.errors}
            register={register}
            label="reset-password.form.password.new-password"
            name="newPassword"
            placeholder="********"
          />
        </div>
        {/* Submit Button */}
        <SubmitButton
          isSubmitting={formState.isSubmitting}
          isValid={formState.isValid}
          text="reset-password.form.submit.reset"
          error={error}
          isPending={isPending}
          title="reset-password.form.submit.contact"
          loading="forget-password.form.submit.loading"
        />
      </form>
    </section>
  );
}

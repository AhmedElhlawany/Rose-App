'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { UseForgot } from '../_hooks/use-forgot-password';
import { useTranslations } from 'next-intl';
import PasswordField from '@/components/features/auth/auth-fields/password-field';
import SubmitButton from '@/components/features/auth/submit-button';

export default function ResetPasswordForm() {
  // Treanslation
  const t = useTranslations('auth');

  // Hook
  const { error, isPending } = UseForgot({ redirect: true }); //! change it
  // Form
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
  });
  // Function
  const onsubmit = () => {};
  return (
    <section className="lg:max-w-auth mx-auto flex min-h-screen w-full max-w-[25.375rem] flex-col justify-center gap-6 px-6 sm:w-[70%] lg:px-0">
      {/* Title Part */}
      <div className="flex flex-col border-b-[.0625rem] border-zinc-200">
        <h1 className="text-xl font-semibold first-letter:uppercase sm:text-2xl">
          {t('reset-password.create-new-password')}
        </h1>
        <p className="pb-3 text-sm font-normal text-zinc-800 first-letter:capitalize sm:text-base">
          {t('reset-password.reset-text')}
        </p>
      </div>

      {/* Form Part */}
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="space-y-3">
          {/* Password section */}
          <PasswordField
            register={register}
            label="reset-password.form.password.old-password"
            name="password"
            placeholder="******"
          />

          {/* Confirm Password section */}
          <PasswordField
            register={register}
            label="reset-password.form.password.new-password"
            name="newPassword"
            placeholder="******"
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

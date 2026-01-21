'use client';


import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UseForgot } from '../_hooks/use-forgot-password';
import {
  ForgotPasswordFormFields,
  forgotSchema,
} from '@/lib/schemas/forgot-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import TextField from '@/components/features/auth/auth-fields/text-field';
import SubmitButton from '@/components/features/auth/submit-button';

export default function ForgotPasswordForm() {
  // Treanslation
  const t = useTranslations('auth');

  // Hook
  const { error, forgot, isPending } = UseForgot({ redirect: true });

  // Form
  const { register, formState, handleSubmit } =
    useForm<ForgotPasswordFormFields>({
      mode: 'all',
      resolver: zodResolver(forgotSchema),
      defaultValues: {
        email: '',
      },
    });

  // Function
  const onsubmit: SubmitHandler<ForgotPasswordFormFields> = async (data) => {
    forgot(data);
  };

  return (
    <section className="lg:max-w-auth mx-auto flex min-h-screen w-full flex-col justify-center gap-6 px-6 sm:w-[70%] lg:px-0  max-w-[25.375rem]">
      {/* Title Part */}
      <div className="flex flex-col border-b-[.0625rem] border-zinc-200">
        <h1 className="text-xl font-semibold capitalize sm:text-2xl">
          {t('forget-password.forgot-password')}
        </h1>
        <p className="pb-3 text-sm font-normal text-zinc-800 first-letter:capitalize sm:text-base">
          {t('forget-password.forget-text')}
        </p>
      </div>

      {/*form Part  */}

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center"
      >
        {/* email section */}
        <TextField
          label="forget-password.form.email.label"
          placeholder="forget-password.form.email.placeholder"
          name="email"
          register={register}
          type="email"
          errors={formState.errors}
        />

        {/* Submit Button */}
        <SubmitButton
          error={error}
          isSubmitting={formState.isSubmitting}
          isValid={formState.isValid}
          isPending={isPending}
          text="forget-password.form.submit.continue"
          title="forget-password.form.submit.no-account"
          link="/register"
        />
      </form>
    </section>
  );
}

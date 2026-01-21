import React from 'react';

import ResetPasswordForm from './_components/reset-password-form';
import ForgotPasswordForm from './_components/forgot-password-form';
import ThemeToggleIcon from '@/components/layout/app/theme-toggle';

export default function page() {
  return (
    <div>
      <ThemeToggleIcon/>
      <ForgotPasswordForm/>
      <ResetPasswordForm />
    </div>
  );
}

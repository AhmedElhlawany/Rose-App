import React from 'react';

import ResetPasswordForm from './_components/reset-password-form';
import ForgotPasswordForm from './_components/forgot-password-form';

export default function page() {
  return (
    <div>
      <ForgotPasswordForm />
      <ResetPasswordForm />
    </div>
  );
}

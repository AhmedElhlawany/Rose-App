import ForgotPasswordForm from './_components/forgot-password-form';
import ResetPasswordForm from './_components/reset-password-form';
import VerifyPasswordForm from './_components/verify-password-form';

interface PageProps {
  searchParams: { step?: string };
}
export default function Page({ searchParams }: PageProps) {
  const step = Number(searchParams.step) || 1;
  return (
    <>
      <div>
        {step === 1 && <ForgotPasswordForm />}
        {step === 2 && <VerifyPasswordForm />}
        {step === 3 && <ResetPasswordForm />}
      </div>
    </>
  );
}

import { useRouter } from '@/i18n/navigation';
import { ForgotPasswordFormFields } from '@/lib/schemas/forgot-password';
import { forgetPassword } from '@/lib/services/forget-passord.service';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

export const UseForgot = ({ redirect = true }) => {
  // Translation
  const t = useTranslations('auth');

  // Navigation
  const router = useRouter();

  // Mutation
  const {
    mutate: forgot,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: ForgotPasswordFormFields) => {
      const payload = await forgetPassword(data);

      if ('error' in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },
    onSuccess: (_payload, variables) => {
      toast.success(t('forget-password.forget-message'));

      // only redirect when allowed
      if (redirect) {
        router.push(`/forgot-password?step=2&email=${variables?.email}`);
      }
    },
  });

  return {
    forgot,
    error,
    isPending,
  };
};

import { useRouter } from '@/i18n/navigation';
import { resetPassword } from '@/lib/services/reset-password.service';
import { ResetPasswordPayload } from '@/lib/types/auth/forget-password/reset';
import { useMutation } from '@tanstack/react-query';

export const UseResetPassword = () => {
     // Navigation
  const router = useRouter();

  // Mutation
  const {
    data: resetpassword,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: ResetPasswordPayload) => {
      const payload = await resetPassword(data);
      if ('error' in payload) {
        throw new Error(payload.error);
      }
      return payload;
    },
    onSuccess:()=>{
router.push('/login')
    }
  });
  return {
    resetpassword,
    isPending,
    error,
  };
};

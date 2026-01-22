import { useMutation } from "@tanstack/react-query";
import { VerifyResetFields } from "@/lib/types/auth/verify";
import { VerifyPassword } from "../_actions/verify-password.action";


export const useVerifyPassword = () => {

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (data: VerifyResetFields) => {
      return await VerifyPassword(data);
    }
  });

  return {
    verifyResetCode: mutate,
    isPending,
    error,
  };
};
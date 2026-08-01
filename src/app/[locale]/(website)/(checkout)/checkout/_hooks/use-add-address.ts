import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { addAddressAction } from "../_action/add-address.action";
import { AddressFormSchema } from "@/lib/schema/address.schema";

export const useAddAddress = () => {
  const t = useTranslations("my-addresses");

  const queryClient = useQueryClient();

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (data: AddressFormSchema) => {
      const res = await addAddressAction(data);

      if ("error" in res) {
        throw new Error(res.error);
      }

      return res;
    },

    onSuccess: () => {
      toast.success(t("success-message"));

      queryClient.invalidateQueries({
        queryKey: ["address"],
      });
    },

    onError: (error: Error) => {
      toast.error(t("error-message", { message: error.message }));
    },
  });

  return {
    addAddress: mutate,
    isPending,
    error,
  };
};
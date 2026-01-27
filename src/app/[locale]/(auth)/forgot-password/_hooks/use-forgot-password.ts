// import { JSON_HEADER } from '@/lib/constants/api.constat';
// import { useMutation } from '@tanstack/react-query';
// import { useTranslations } from 'next-intl';
// import { toast } from 'sonner';

// type ForgotPasswordFormFields = {
//   email: string;
// }

// export const UseForgot = () => {
//   // Translation
//   const t = useTranslations('auth');
//   // ! To be handled by the flow owner
//   // Navigation
//   // const router = useRouter();

//   // Mutation
//   const {
//     mutate: forgot,
//     error,
//     isPending,
//   } = useMutation({
//     mutationFn: async (data: ForgotPasswordFormFields) => {
//       const response = await fetch(
//         `https://flower.elevateegy.com/api/v1/auth/forgotPassword`,
//         {
//           method: 'POST',
//           headers: {
//             ...JSON_HEADER,
//           },
//           body: JSON.stringify(data),
//         },
//       );
//       const payload = await response.json();

//       if ('error' in payload) {
//         throw new Error(payload.error);
//       }

//       return payload;
//     },
//     onSuccess: () => {
//       toast.success(t('forget-password.forget-message'));
//       // ! To be handled by the flow owner
//       // only redirect when allowed
//       // if (redirect) {
//       //   // router.push(`/forgot-password?step=2&email=${variables?.email}`);
//       // }
//     },
//   });

//   return {
//     forgot,
//     error,
//     isPending,
//   };
// };
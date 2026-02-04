import { getOccasion } from '@/lib/services/occasion/occasion-content.service';
import { useQuery } from '@tanstack/react-query';
const LIMT = 6;
export const useOccasion = () => {
  const {
    data: occasion,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['Occasion', LIMT],
    queryFn: async () => {
      const payload = await getOccasion(LIMT);
      if ('error' in payload) {
        throw new Error(payload.error);
      }
      return payload;
    },
  });

  return {
    occasion,
    isLoading,
    error,
  };
};

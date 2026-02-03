import { getOccasion } from '@/lib/services/occasion/occasion-content.service';
import { useQuery } from '@tanstack/react-query';
const LIMT = 6;
export const useOccasion = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['occasion'],
    queryFn: async () => {
      const payload = await getOccasion(LIMT);
      if ('error' in payload) {
        throw new Error(payload.error);
      }
    },
  });

  return {
    data,
    isLoading,
    error,
  };
};

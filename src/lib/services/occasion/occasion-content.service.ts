import { JSON_HEADER } from '@/lib/constants/api.constant';
import { OccasionsResponse } from '@/lib/types/occasion/occasion';

export const getOccasion = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/occasions`, {
    method: 'GET',
    headers: {
      ...JSON_HEADER,
    },
  });
  const payload: ApiResponse<OccasionsResponse> = await response.json();

  return payload;
};

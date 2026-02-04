'use client';

import { getProduct } from '@/lib/services/product/product.service';
import { useQuery } from '@tanstack/react-query';
import { useFilters } from './use-filter';

export const UseProduct = () => {
  const { filters } = useFilters({
    occasion: null,
    price: '',
  });

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['product', filters],

    queryFn: async () => {
      const payload = await getProduct({
        occasionId: filters.occasion ?? undefined,
        price: filters.price ?? undefined,
      });
      if ('error' in payload) {
        throw new Error(payload.error);
      }
      return payload;
    },
  });
  return {
    product,
    error,
    isLoading,
  };
};

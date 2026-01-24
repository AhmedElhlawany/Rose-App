'use server';

import { JSON_HEADER } from '@/lib/constants/api.constat';
import { VerifyResetFields } from '@/lib/types/auth/verify';

export async function VerifyPassword(data: VerifyResetFields) {
  const res = await fetch(
    'https://flower.elevateegy.com/api/v1/auth/verifyResetCode',
    {
      method: 'POST',
      headers: {
        ...JSON_HEADER,
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    },
  );

  const payload = await res.json();

  return payload;
}

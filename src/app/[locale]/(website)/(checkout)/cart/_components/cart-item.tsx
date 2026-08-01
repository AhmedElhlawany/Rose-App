'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Star, X } from 'lucide-react';
import CartAction from './cart-action';
import { CartItemResponse, CartItemUI } from '@/lib/types/cart';
import { cn } from '@/lib/utility/tailwind-merge';

type CartItemProp = {
  cartInfo: CartItemResponse | CartItemUI;
  className?: string;
};

export default function CartItem({ cartInfo, className }: CartItemProp) {
  const t = useTranslations();

  // Prevent crash if backend returns product: null
  if (!cartInfo.product) {
    console.error('Invalid cart item:', cartInfo);

    return (
      <div
        className={cn(
          'flex items-center justify-between py-4 text-red-500',
          className,
        )}
      >
        <p>This product is no longer available.</p>
      </div>
    );
  }

  const {
    rateAvg,
    rateCount,
    imgCover,
    _id,
    title,
    quantity: productQuantity,
  } = cartInfo.product;

  const { quantity, price } = cartInfo;

  const safeRateAvg = rateAvg ?? 0;
  const safeRateCount = rateCount ?? 0;

  const productRating =
    safeRateCount > 0 ? (safeRateAvg / safeRateCount).toFixed(1) : '0';

  return (
    <div
      className={cn(
        'flex flex-col gap-4 py-3 md:flex-row md:justify-between',
        className,
      )}
    >
      <div className="cart-info flex flex-col gap-3 md:flex-row">
        <div className="w-full overflow-hidden rounded-md md:w-auto">
          <Image
            className="h-auto w-full object-cover md:w-[150px]"
            src={imgCover!}
            alt={title}
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-lg font-semibold capitalize">{title}</h1>

            <div className="my-3 flex items-center gap-2">
              <Star fill="orange" stroke="orange" size={18} />

              <span>
                {t('rating')}:{' '}
                {t('rateavg-number-number-base', {
                  rateAvg: safeRateAvg,
                })}
                /
                {t('ratecount-number-number-base', {
                  rateCount: safeRateCount,
                })}
              </span>

              <span className="font-medium text-blue-600">{productRating}</span>
            </div>
          </div>

          <div className="mt-2 md:mt-0">
            <p className="inline-flex items-baseline gap-1 whitespace-nowrap">
              <span className="flex items-center font-bold text-maroon-600 dark:text-maroon-50">
                (
                <X size={16} className="inline" />
                {t('quantity-number-number-base', {
                  quantity,
                })}
                )
              </span>

              <span className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                {t('productprice-number-number-base', {
                  productPrice: quantity * price,
                })}
              </span>

              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {t('egp')}
              </span>
            </p>
          </div>
        </div>
      </div>

      <CartAction
        productId={_id}
        productQuantity={productQuantity}
        quantityInCart={quantity}
      />
    </div>
  );
}

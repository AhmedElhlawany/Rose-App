'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utility/tailwind-merge';
import { Eye, EyeOff } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
interface PasswordFieldProps<
  T extends FieldValues,
> extends React.HTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
  //   errors: FieldErrors<T>;
  label: string;
  placeholder: string;
}
export default function PasswordField<T extends FieldValues>({
  name,
  register,
  label,
  placeholder,
}: PasswordFieldProps<T>) {
  // Translation
  const t = useTranslations('auth');

  // Hook
  const locale = useLocale();

  // State
  const [toggle, settoggle] = useState<boolean>(false);

  // Function
  const HandleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className="flex w-full flex-col">
        {/* Label */}
        <Label className="pb-1 text-sm font-medium capitalize text-zinc-800">
          {t(label)}
        </Label>

        {/* Input */}
        <div className="relative">
          <Input
            {...register(name)}
            placeholder={placeholder}
            type={cn(toggle ? 'password' : 'text')}
            className="w-full text-black placeholder:text-zinc-400"
          />
          {/* Toggle Password Button */}
          <div>
            <Button
              variant={'carousel'}
              onClick={HandleToggle}
              type="button"
              className={cn(
                'absolute top-1/2 size-5 -translate-y-1/2',
                locale === 'ar' ? 'left-0' : 'right-0',
              )}
            >
              {toggle ? (
                <EyeOff className="size-5 text-zinc-400" />
              ) : (
                <Eye className="size-5 text-zinc-400" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

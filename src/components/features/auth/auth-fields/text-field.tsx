import ValidationError from '@/components/error/validation-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import React from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

interface EmailFieldProps<
  T extends FieldValues,
> extends React.HTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder: string;
  type: string;
}

export default function TextField<T extends FieldValues>({
  register,
  name,
  label,
  placeholder,
  type,
  errors,
}: EmailFieldProps<T>) {
  // Translation
  const t = useTranslations('Auth');

  return (
    <>
      <div className="flex w-full flex-col">
        {/* Label */}
        <Label className="pb-1 text-sm font-medium capitalize text-zinc-800">
          {t(label)}
        </Label>

        {/* Input */}
        <Input {...register(name)} placeholder={t(placeholder)} type={type} />
      </div>

      {/* Error */}
      <div>
        <ValidationError errors={errors} name={name} />
      </div>
    </>
  );
}

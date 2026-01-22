'use client'

import { Checkbox } from "@/components/ui/checkbox"

type RememberMeProps = {
  checked: boolean
  onChange: (value: boolean) => void
}

export default function RememberMe({ checked, onChange }: RememberMeProps) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <Checkbox checked={checked} onCheckedChange={onChange} />
      Remember me
    </label>
  )
}

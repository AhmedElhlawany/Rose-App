import * as React from "react"
import {  EyeIcon, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const InputField = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className,...props }, ref) => {
    return (
      <input
        type="text"
        className={cn(
          "flex h-9 w-full  border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "[invaild=true]:ring-destructive aria-[invalid=true]:foucs-visible:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  });
InputField.displayName = 'InputField';

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ ...props }, ref) => {
    const [showPassword,setShowPassword]=React.useState(false)

    return (
      <div className="relative">
        <InputField
          className="pe-12"
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 "
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeIcon className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </Button>
      </div>
    )
  }
);

PasswordInput.displayName = 'PasswordInput';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    if(type === 'password') return <PasswordInput className={className} {...props} ref={ref} />;
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full  border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }



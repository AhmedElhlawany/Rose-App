import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utility/tailwind-merge"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "h-14 w-44 px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-maroon-600  text-white  hover:bg-maroon-700 disabled:bg-zinc-300 disabled:text-zinc-500",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 disabled:bg-zinc-300 disabled:text-zinc-500",
        outline:
          "border border-maroon-600 text-maroon-600  hover:bg-maroon-50 disabled:bg-zinc-100 disabled:border-zinc-300 disabled:text-zinc-400",
        Subtle:
          "bg-zinc-50 border border-zinc-400 text-zinc-800  hover:bg-zinc-100 disabled:bg-zinc-100 disabled:border-zinc-300 disabled:text-zinc-400",
        secondary:
          "bg-maroon-50 text-maroon-600  hover:bg-maroon-100 disabled:bg-zinc-300 disabled:text-zinc-500",
        ghost: "hover:bg-zinc-100 text-zinc-800 data-[state=open]:bg-zinc-10 hover:text-zinc-800 disabled:text-zinc-400",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
     <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* If loading, show the spinner next to the text */}
        {isLoading ? (
          <>
            {children}
            <Loader2 className="ml-2 h-4 w-4 animate-spin opacity-80" />
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

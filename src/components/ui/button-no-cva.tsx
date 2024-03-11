import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../../@lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "destructive" | "monochrome";
  modifier?: "plain" | "outline";
  size?: "slim" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

export const ButtonNoCva = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, modifier, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "rounded-md relative",
          variant === "default" &&
            "bg-white text-text shadow-button border border-gray-400",
          variant === "monochrome" && "bg-white text-text border border-gray-400",
          variant === "primary" && "bg-primary text-white",
          variant === "destructive" && "bg-destructive text-white",

          // Modifiers
          modifier === "outline" &&
            "bg-transparent border border-current shadow-[0_0_0_1px_currentColor]",
          modifier === "outline" &&
            variant === "destructive" &&
            "text-destructive",
          modifier === "outline" && variant === "primary" && "text-primary",

          modifier === "plain" &&
            "shadow-none bg-transparent border-none px-2 py-1 text-sm",
          modifier === "plain" && variant === "destructive" && "text-destructive",
          modifier === "plain" && variant === "primary" && "text-primary",

          // Sizes overrides
          size === "slim" && "text-sm",
          size === "medium" && "text-sm",
          size === "large" && "text-base",
          modifier !== "plain" && size === "slim" && "px-3 py-[3px]",
          modifier !== "plain" && size === "medium" && "px-4 py-2",
          modifier !== "plain" && size === "large" && "px-6 py-3",
          fullWidth && "w-full",
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonNoCva.displayName = "ButtonNoCva";

export default ButtonNoCva;

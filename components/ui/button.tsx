import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-md text-primary-5 font-primary font-bold hover:cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-linear-to-r from-primary-2 to-primary-1 ",
        primaryShadow: "bg-linear-to-r from-primary-2 to-primary-1 shadow-md",
        primaryInsetShadow:
          "bg-linear-to-r from-primary-2 to-primary-1  inset-shadow-sm inset-shadow-black/50",
        primaryGhost: "bg-linear-to-r from-primary-2 to-primary-1  opacity-40",
        secondary: "bg-linear-to-r from-primary-5 to-primary-4 text-primary-1",
        secondaryShadow:
          "bg-linear-to-r from-primary-5 to-primary-4 text-primary-1 shadow-md",
        secondaryInsetShadow:
          "bg-linear-to-r from-primary-5 to-primary-4 text-primary-1 inset-shadow-sm inset-shadow-black/50",
        secondaryGhost:
          "bg-linear-to-r from-primary-5 to-primary-4 text-primary-1  opacity-40",
        tertiary: "border-3 rounded-md border-primary-1 text-primary-1",
        tertiaryShadow:
          "border-3 rounded-md border-primary-1 text-primary-1 shadow-md",
        tertiaryInsetShadow:
          "border-3 rounded-md border-primary-1 text-primary-1 inset-shadow-sm inset-shadow-black/50",
        tertiaryGhost:
          "border-3 rounded-md border-primary-1 text-primary-1 opacity-40",
        outline: "",
      },
      size: {
        default: "h-9 px-10 py-6 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

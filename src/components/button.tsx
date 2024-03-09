import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Component, JSX, splitProps } from "solid-js";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-muted-foreground underline-offset-4 underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ["size", "variant", "class", "isLoading", "disabled"]);

  const className = buttonVariants({
    variant: local.variant,
    size: local.size,
    className: local.class,
  });

  return <button class={className} disabled={local.isLoading || local.disabled} {...others} />;
};

const FancyButton = (props: { children: JSX.Element; class?: string }) => {
  return (
    <Button
      class={cn(
        "hover:animate-shimmer border bg-[linear-gradient(110deg,#121212,35%,#242424,50%,#121212)] bg-[length:200%_100%] text-white transition-colors shadow-sm shadow-neutral-950",
        props.class,
      )}
    >
      {props.children}
      {/* <div class="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#6d6d6d] to-transparent" /> */}
    </Button>
  );
};

export const ShimmerButton = (props: { children: JSX.Element }) => {
  return (
    <button class="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {props.children}
    </button>
  );
};

export { Button, buttonVariants, FancyButton };

import { type VariantProps, cva } from "class-variance-authority";
import { Component, JSX, splitProps } from "solid-js";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-3xl tracking-tight lg:text-4xl",
      h2: "scroll-m-20 text-2xl tracking-tight first:mt-0",
      h3: "scroll-m-20 text-xl tracking-tight",
      h4: "scroll-m-20 text-lg tracking-tight",
      p: "leading-5",
    },
    asLabel: {
      true: "text-muted-foreground",
    },
  },
});

export interface TextProps
  extends JSX.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text: Component<TextProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "class", "asLabel"]);
  const className = textVariants({
    variant: local.variant,
    asLabel: local.asLabel,
    className: local.class,
  });

  switch (local.variant) {
    case "h1":
      return <h1 class={className} {...others} />;
    case "h2":
      return <h2 class={className} {...others} />;
    case "h3":
      return <h3 class={className} {...others} />;
    case "h4":
      return <h4 class={className} {...others} />;
  }

  return <p class={className} {...others} />;
};

export { Text, textVariants };

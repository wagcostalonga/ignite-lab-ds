import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps {
  size?: "xs" | "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextProps) {
  // "Slot" - pega todas as propriedades do component (ex. className) e repassa para o primeiro componente que vem no children
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}

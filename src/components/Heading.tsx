import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "md", children, asChild }: HeadingProps) {
  // "Slot" - pega todas as propriedades do component (ex. className) e repassa para o primeiro componente que vem no children
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-hsm": size === "sm",
        "text-hmd": size === "md",
        "text-hlg": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}

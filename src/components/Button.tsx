import { ReactNode } from "react";
import { clsx } from "clsx";

export interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {

  return (
    <button
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold text-gray-900 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-1 ring-white"
      )}
    >
      {children}
    </button>
  );
}

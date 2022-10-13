import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextfieldRootProps {
  children: ReactNode;
}

function TextfieldRoot(props: TextfieldRootProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 rounded w-full bg-gray-800 focus-within:ring-1 ring-cyan-300">
      {props.children}
    </div>
  );
}

export interface TextfieldIconProps {
  children: ReactNode;
}

function TextfieldIcon(props: TextfieldIconProps) {
  return <Slot className="w-5 h-5 text-gray-400">{props.children}</Slot>;
}

export interface TextfieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextfieldInput(props: TextfieldInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-white text-sm border-0 placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const Textfield = {
  Root: TextfieldRoot,
  Input: TextfieldInput,
  Icon: TextfieldIcon,
};

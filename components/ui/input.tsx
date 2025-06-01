import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  placeholder,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="relative flex items-center">
      <input
        type={type}
        data-slot="input"
        placeholder=" "
        className={cn(
          "peer h-9 w-full border border-[var(--gray)] focus:border-white hover:border-white bg-transparent p-2 text-base outline-none",
          "placeholder:text-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
          className
        )}
        {...props}
      />
      <label
        className="absolute bg-[var(--color-background)] left-1 px-1 top-2 text-muted-foreground text-sm transition-all
                   peer-focus:-top-2.5 peer-focus:text-white
                   peer-hover:-top-2.5 peer-hover:text-white
                   "
      >
        {placeholder}
      </label>
    </div>
  );
}

export { Input };

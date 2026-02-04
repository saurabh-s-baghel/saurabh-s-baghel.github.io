import React from "react";

export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm
      bg-zinc-800 text-zinc-100
      dark:bg-zinc-200 dark:text-zinc-900
      ${className}`}
    >
      {children}
    </span>
  );
}
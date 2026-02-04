import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition 
      bg-zinc-900 text-white hover:bg-zinc-700 
      dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
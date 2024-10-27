import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string | null) {
  if (!name) {
    return "NN";
  }

  const names = name.split(" ");
  const initials = names.map((name) => name.charAt(0).toUpperCase());
  return initials.join("");
}

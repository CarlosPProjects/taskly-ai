import { toast } from "@/hooks/use-toast";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string | null | undefined) {
  if (!name) {
    return "NN";
  }

  const names = name.split(" ");
  const initials = names.map((name) => name.charAt(0).toUpperCase());
  return initials.join("");
}


export const isActivePathname = (path: string, pathname: string) => {
  return pathname.includes(path);
};

export const showErrorToast = (description: string) => {
  toast({
    title: "Error",
    variant: "destructive",
    description,
  });
};

export const formatDate = (date: Date) => {

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
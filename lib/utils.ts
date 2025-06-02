import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, "");
  let formatted = "";
  if (cleaned.length > 0) formatted += cleaned.slice(0, 2);
  if (cleaned.length > 2) formatted += " " + cleaned.slice(2, 5);
  if (cleaned.length > 5) formatted += " " + cleaned.slice(5, 7);
  if (cleaned.length > 7) formatted += " " + cleaned.slice(7, 9);
  return formatted;
};

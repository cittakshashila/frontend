import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isTeaser = process.env.IsTeaser || false;
export const CLIENT_ID = process.env.CLIENT_ID || "";
export const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
export const API_URL = process.env.API_HOST || "http://localhost:6969";

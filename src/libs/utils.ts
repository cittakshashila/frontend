import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {G_API} from "./API";
import type { INFO_URL as INFO_URL_TYPE, MEDIA_URL as MEDIA_URL_TYPE } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isTeaser = process.env.IsTeaser || false;
export const CLIENT_ID = process.env.CLIENT_ID || "";
export const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
export const API_URL = process.env.API_HOST || "https://api.cittakshashila.in";


export const REPO_OWNER = "cittakshashila";
export const REPO_NAME = "EVENTS-DATA-24";

export const MEDIA_URL = (ID: string, MID: number): MEDIA_URL_TYPE => {
    return `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/master/events/${ID}/assets/${MID}.png`;
}

export const TOKEN_SECRET = 'veryverysecretthingisthis'

export const INFO_URL = (ID: string): INFO_URL_TYPE => {
    return `https://github.com/${REPO_OWNER}/${REPO_NAME}/blob/master/events/${ID}/info.json`;
}

export const FOLDER_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/master/events`;
export const FOLDER_INFO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/master/info.json`;

export const PARSE = (data: Array<string>): Record<string, any> => {
    const jsonString: string = data.join("").replace(/\s*(\{|\}|\[|\]|,|:)\s*/g, '$1');
    const jsonObject: Record<string, any> = JSON.parse(jsonString);
    return jsonObject;
}

export const CALL = new G_API(process.env.G_TOKEN || "");

export type Theme = "light" | "dark";

export const THEME_ATTRIBUTE = "data-theme";
export const THEME_STORAGE_KEY = "portfolio-theme";

export function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

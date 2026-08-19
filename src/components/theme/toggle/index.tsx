import {
  isTheme,
  Theme,
  THEME_ATTRIBUTE,
  THEME_STORAGE_KEY,
} from "@/entities/theme/Theme";
import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const DARK_THEME_QUERY = "(prefers-color-scheme: dark)";

function getSystemTheme(): Theme {
  return window.matchMedia(DARK_THEME_QUERY).matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
}

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return isTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme | null>(null);
  const hasExplicitPreference = useRef(false);

  useEffect(() => {
    const documentTheme =
      document.documentElement.getAttribute(THEME_ATTRIBUTE);
    const storedTheme = getStoredTheme();
    const currentTheme = isTheme(documentTheme)
      ? documentTheme
      : storedTheme ?? getSystemTheme();
    const systemTheme = window.matchMedia(DARK_THEME_QUERY);

    hasExplicitPreference.current = storedTheme !== null;
    applyTheme(currentTheme);
    setTheme(currentTheme);

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (hasExplicitPreference.current) return;

      const nextTheme: Theme = event.matches ? "dark" : "light";
      applyTheme(nextTheme);
      setTheme(nextTheme);
    };

    systemTheme.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemTheme.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const currentTheme =
      theme ??
      (isTheme(document.documentElement.getAttribute(THEME_ATTRIBUTE))
        ? (document.documentElement.getAttribute(THEME_ATTRIBUTE) as Theme)
        : getSystemTheme());
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";

    hasExplicitPreference.current = true;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The theme still applies for this session when storage is unavailable.
    }

    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  const accessibleLabel =
    theme === null
      ? "Alternar tema de cores"
      : theme === "dark"
      ? "Ativar tema claro"
      : "Ativar tema escuro";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={accessibleLabel}
      title={accessibleLabel}
    >
      <Sun className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden />
      <Moon className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden />
    </button>
  );
}

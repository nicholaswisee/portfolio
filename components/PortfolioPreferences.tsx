"use client";

import { createContext, useContext, useEffect, useId, useState } from "react";
import type { DensityMode, ThemeChoice } from "@/types/types";

const THEME_STORAGE_KEY = "portfolio-theme";
const DENSITY_STORAGE_KEY = "portfolio-density";

type PortfolioPreferences = {
  theme: ThemeChoice | null;
  density: DensityMode | null;
  setTheme: (theme: ThemeChoice) => void;
  setDensity: (density: DensityMode) => void;
};

const PortfolioPreferencesContext = createContext<PortfolioPreferences | null>(
  null,
);

const parseTheme = (value: string | null): ThemeChoice | null =>
  value === "light" || value === "dark" ? value : null;

const parseDensity = (value: string | null): DensityMode | null =>
  value === "full" || value === "compact" ? value : null;

const systemTheme = (): ThemeChoice =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const readStoredValue = (key: string): string | null => {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeStoredValue = (key: string, value: string) => {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
};

export function PortfolioPreferencesProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setThemeState] = useState<ThemeChoice | null>(null);
  const [density, setDensityState] = useState<DensityMode | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = parseTheme(readStoredValue(THEME_STORAGE_KEY));
    const savedDensity = parseDensity(readStoredValue(DENSITY_STORAGE_KEY));

    const rootTheme = parseTheme(root.dataset.theme ?? null);
    const nextTheme = savedTheme ?? rootTheme ?? systemTheme();
    const nextDensity = savedDensity ?? "full";

    root.dataset.theme = nextTheme;
    root.dataset.density = nextDensity;
    setThemeState(nextTheme);
    setDensityState(nextDensity);
  }, []);

  const setTheme = (nextTheme: ThemeChoice) => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = nextTheme;
    }
    setThemeState(nextTheme);

    writeStoredValue(THEME_STORAGE_KEY, nextTheme);
  };

  const setDensity = (nextDensity: DensityMode) => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.density = nextDensity;
    }
    setDensityState(nextDensity);

    writeStoredValue(DENSITY_STORAGE_KEY, nextDensity);
  };

  return (
    <PortfolioPreferencesContext.Provider
      value={{ theme, density, setTheme, setDensity }}
    >
      {children}
    </PortfolioPreferencesContext.Provider>
  );
}

export function usePortfolioPreferences() {
  const preferences = useContext(PortfolioPreferencesContext);

  if (!preferences) {
    throw new Error(
      "usePortfolioPreferences must be used within PortfolioPreferencesProvider.",
    );
  }

  return preferences;
}

export function ThemeControl() {
  const { setTheme, theme } = usePortfolioPreferences();
  const controlId = useId();

  return (
    <fieldset aria-label="Theme preference" data-theme-control="true" className="preference-pill">
       <input id={`theme-light-${controlId}`} type="radio" name={`theme-${controlId}`} value="light" checked={theme === "light"} onChange={() => setTheme("light")} />
       <label htmlFor={`theme-light-${controlId}`}>Light</label>
       <input id={`theme-dark-${controlId}`} type="radio" name={`theme-${controlId}`} value="dark" checked={theme === "dark"} onChange={() => setTheme("dark")} />
       <label htmlFor={`theme-dark-${controlId}`}>Dark</label>
       <span className="preference-pill-thumb" aria-hidden="true" />
    </fieldset>
  );
}

export function DensityControl() {
  const { density, setDensity } = usePortfolioPreferences();
  const controlId = useId();

  return (
    <fieldset aria-label="Density preference" data-density-control="true" className="preference-pill">
       <input id={`density-full-${controlId}`} type="radio" name={`density-${controlId}`} value="full" checked={density === "full"} onChange={() => setDensity("full")} />
       <label htmlFor={`density-full-${controlId}`}>Full</label>
       <input id={`density-compact-${controlId}`} type="radio" name={`density-${controlId}`} value="compact" checked={density === "compact"} onChange={() => setDensity("compact")} />
       <label htmlFor={`density-compact-${controlId}`}>Compact</label>
       <span className="preference-pill-thumb" aria-hidden="true" />
    </fieldset>
  );
}

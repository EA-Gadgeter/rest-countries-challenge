import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

const applyHtmlTheme = (theme: Theme) => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light", // Default theme
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "dark" ? "light" : "dark";
          applyHtmlTheme(newTheme);
          return { theme: newTheme };
        }),
    }),
    {
      name: "theme-storage", // localStorage key name
      onRehydrateStorage: () => {
        return (state) => {
          if (state) {
            applyHtmlTheme(state.theme);
          }
        };
      },
    }
  )
);
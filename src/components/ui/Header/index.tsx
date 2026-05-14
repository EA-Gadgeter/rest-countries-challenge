import { SemiMoonIcon, SunIcon } from "@/components/icons";

import { VERY_DARK_BLUE_TEXT, WHITE } from "@/conts/colors";

import { useThemeStore } from "@/stores/themeStore";

import styles from "./Header.module.css";

export const Header = () => {
  const toggleTheme = useThemeStore(state => state.toggleTheme);
  const theme = useThemeStore(state => state.theme);

  const isDarkTheme = theme === "dark";

  return (
    <header className={`${styles.header} ${isDarkTheme && styles.header_dark}`}>
      <h1 className={`${styles.title} ${isDarkTheme && styles.title_dark}`}>
        Where in the world?
      </h1>

      <button 
        type="button" 
        className={`${styles.button} ${isDarkTheme && styles.button_dark}`}
        onClick={toggleTheme}
      >
        {isDarkTheme ? (
          <SunIcon className={styles.icon} strokeColor={WHITE} />
        ) : (
          <SemiMoonIcon
            className={styles.icon}
            fillColor=""
            strokeColor={VERY_DARK_BLUE_TEXT}
          />
        )}

        <span>
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </header>
  );
};
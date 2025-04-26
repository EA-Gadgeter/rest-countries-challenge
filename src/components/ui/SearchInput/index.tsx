import { useThemeStore } from "@/stores/themeStore";

import { SearchIcon } from "@/components/icons";

import { WHITE, DARK_GRAY_INPUT } from "@/conts/colors";

import styles from "./SearchInput.module.css";

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const theme = useThemeStore(state => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`${styles.container} ${isDarkMode && styles.container_dark} ${className}`}>
      <SearchIcon 
        className={styles.input_icon}
        strokeColor={isDarkMode ? WHITE : DARK_GRAY_INPUT} 
      />
      
      <input 
        className={`${styles.input} ${isDarkMode && styles.input_dark}`}
        type="text" 
        placeholder="Search for a country..." />
    </div>
  );
};
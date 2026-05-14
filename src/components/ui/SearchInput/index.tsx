import { useThemeStore } from "@/stores/themeStore";

import { SearchIcon } from "@/components/icons";

import { WHITE, DARK_GRAY_INPUT } from "@/conts/colors";

import styles from "./SearchInput.module.css";

interface Props {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ className, value, onChange }: Props) => {
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a country..." />
    </div>
  );
};
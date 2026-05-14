import { useState, useRef, useEffect } from "react";

import { ChevronDownIcon } from "@/components/icons";

import { DARK_BLUE, WHITE } from "@/conts/colors";

import { useThemeStore } from "@/stores/themeStore";

import styles from "./CountryFilter.module.css";

interface Props {
  className?: string;
  selected: string | null;
  onSelect: (_: string) => void;
}

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const CountryFilter = ({ className, selected, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const theme = useThemeStore((state) => state.theme);
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      <button
        type="button"
        className={`${styles.trigger} ${isDarkMode ? styles.trigger_dark : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selected ?? "Filter by Region"}</span>
        <ChevronDownIcon
          className={`${styles.chevron} ${isOpen ? styles.chevron_open : ""}`}
          strokeColor={isDarkMode ? WHITE : DARK_BLUE}
        />
      </button>

      {isOpen && (
        <ul
          className={`${styles.options_list} ${isDarkMode ? styles.options_list_dark : ""}`}
          role="listbox"
          aria-label="Filter by Region"
        >
          {REGIONS.map((region) => (
            <li
              key={region}
              className={`${styles.option} ${isDarkMode ? styles.option_dark : ""} ${selected === region ? styles.option_selected : ""}`}
              role="option"
              aria-selected={selected === region}
              onClick={() => {
                onSelect(region);
                setIsOpen(false);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

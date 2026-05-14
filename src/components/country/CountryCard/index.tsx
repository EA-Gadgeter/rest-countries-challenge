import { Link } from "react-router";

import { useThemeStore } from "@/stores/themeStore";

import type { Country } from "@/types/country";

import styles from "./CountryCard.module.css";

interface Props {
  country: Country;
}

export const CountryCard = ({ country }: Props) => {
  const theme = useThemeStore((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <Link
      to={`/${country.cca3}`}
      className={`${styles.card} ${isDarkMode ? styles.card_dark : ""}`}
    >
      <div className={styles.flag_container}>
        <img
          src={country.flag.svg || country.flag.png}
          alt={`Flag of ${country.name}`}
          className={styles.flag}
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>{country.name}</h2>

        <dl className={styles.details}>
          <div className={styles.detail_row}>
            <dt>Population:</dt>
            <dd>{country.population.toLocaleString()}</dd>
          </div>
          <div className={styles.detail_row}>
            <dt>Region:</dt>
            <dd>{country.region}</dd>
          </div>
          <div className={styles.detail_row}>
            <dt>Capital:</dt>
            <dd>{country.capital ?? "—"}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
};

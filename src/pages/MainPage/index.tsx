import { useState } from "react";

import { SearchInput } from "@/components/ui/SearchInput";
import { CountryFilter } from "@/components/country/CountryFilter";
import { CountryCard } from "@/components/country/CountryCard";

import { useCountries } from "@/hooks/useCountries";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const { countries, isLoading, error } = useCountries({ search: searchValue, region: selectedRegion });

  return (
    <>
      <fieldset className={styles.fieldset}>
        <SearchInput
          className={styles.search_input}
          value={searchValue}
          onChange={setSearchValue}
        />
        <CountryFilter
          className={styles.country_filter}
          selected={selectedRegion}
          onSelect={setSelectedRegion}
        />
      </fieldset>

      {isLoading ? (
        <p className={styles.status_message}>Loading...</p>
      ) : error ? (
        <p className={styles.status_message}>Something went wrong. Please try again.</p>
      ) : countries.length === 0 ? (
        <p className={styles.status_message}>No countries found.</p>
      ) : (
        <div className={styles.countries_grid}>
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </>
  );
};
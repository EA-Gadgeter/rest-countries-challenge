import { useState } from "react";

import { SearchInput } from "@/components/ui/SearchInput";
import { CountryFilter } from "@/components/country/CountryFilter";
import { CountryCard } from "@/components/country/CountryCard";

import { useCountries } from "@/hooks/useCountries";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const countries = useCountries({ search: searchValue, region: selectedRegion });

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

      <div className={styles.countries_grid}>
        {countries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </>
  );
};
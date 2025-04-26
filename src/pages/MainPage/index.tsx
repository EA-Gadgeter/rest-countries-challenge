import { SearchInput } from "@/components/ui/SearchInput";
import { CountryFilter } from "@/components/country/CountryFilter";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <SearchInput className={styles.search_input}/>
        <CountryFilter className={styles.country_filter} />
      </fieldset>

      <div>
        MainPage
      </div>
    </>
  );
};
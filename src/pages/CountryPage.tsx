import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { ArrowLeftIcon } from "@/components/icons";
import { useThemeStore } from "@/stores/themeStore";
import { WHITE, VERY_DARK_BLUE_TEXT } from "@/conts/colors";
import { getCountryByCode, getBorderCountries } from "@/services/getCountryByCode";

import type { Country } from "@/types/country";
import type { CountryDetail } from "@/services/getCountryByCode";

import styles from "./CountryPage.module.css";

export const CountryPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const theme = useThemeStore((state) => state.theme);
  const isDarkTheme = theme === "dark";

  const country = (state?.country ?? null) as Country | null;

  const [detailData, setDetailData] = useState<CountryDetail | null>(null);
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [bordersLoading, setBordersLoading] = useState(false);

  // Effect 1: fetch the fields not available from the card (subregion, tld, currencies, languages, borders)
  useEffect(() => {
    if (!country?.cca3) return;

    let cancelled = false;
    setDetailData(null);

    getCountryByCode(country.cca3)
      .then((data) => {
        if (!cancelled) setDetailData(data);
      })
      .catch(() => {
        if (!cancelled) setDetailData({});
      });

    return () => {
      cancelled = true;
    };
  }, [country?.cca3]);

  // Effect 2: once we have the borders list, fetch the country data for each border button
  useEffect(() => {
    const borders = detailData?.borders;

    if (!borders?.length) {
      setBorderCountries([]);
      setBordersLoading(false);
      return;
    }

    let cancelled = false;
    setBordersLoading(true);

    getBorderCountries(borders)
      .then((data) => {
        if (!cancelled) setBorderCountries(data);
      })
      .catch(() => {
        if (!cancelled) setBorderCountries([]);
      })
      .finally(() => {
        if (!cancelled) setBordersLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [detailData]);

  const pageClass = `${styles.page} ${isDarkTheme ? styles.page_dark : ""}`;
  const iconStroke = isDarkTheme ? WHITE : VERY_DARK_BLUE_TEXT;

  if (!country) {
    return (
      <div className={pageClass}>
        <button className={styles.back_btn} onClick={() => navigate("/")}>
          <ArrowLeftIcon strokeColor={iconStroke} />
          <span>Back</span>
        </button>
        <p className={styles.no_data}>No country data available.</p>
      </div>
    );
  }

  const hasBorders = detailData?.borders && detailData.borders.length > 0;

  return (
    <div className={pageClass}>
      <button className={styles.back_btn} onClick={() => navigate(-1)}>
        <ArrowLeftIcon strokeColor={iconStroke} />
        <span>Back</span>
      </button>

      <img
        className={styles.flag}
        src={country.flag.svg || country.flag.png}
        alt={`Flag of ${country.name}`}
      />

      <div className={styles.info}>
        <h1 className={styles.name}>{country.name}</h1>

        <div className={styles.details_groups}>
          <dl className={styles.details}>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Native Name:</dt>
              <dd className={styles.dd}>{country.nativeName ?? "—"}</dd>
            </div>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Population:</dt>
              <dd className={styles.dd}>{country.population.toLocaleString()}</dd>
            </div>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Region:</dt>
              <dd className={styles.dd}>{country.region}</dd>
            </div>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Sub Region:</dt>
              <dd className={styles.dd}>{detailData?.subregion ?? "—"}</dd>
            </div>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Capital:</dt>
              <dd className={styles.dd}>{country.capital ?? "—"}</dd>
            </div>
          </dl>

          <dl className={styles.details}>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Top Level Domain:</dt>
              <dd className={styles.dd}>{detailData?.tld?.join(", ") ?? "—"}</dd>
            </div>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Currencies:</dt>
              <dd className={styles.dd}>{detailData?.currencies?.join(", ") ?? "—"}</dd>
            </div>
            <div className={styles.detail_row}>
              <dt className={styles.dt}>Languages:</dt>
              <dd className={styles.dd}>{detailData?.languages?.join(", ") ?? "—"}</dd>
            </div>
          </dl>
        </div>

        {hasBorders && (
          <section className={styles.borders}>
            <h2 className={styles.borders_title}>Border Countries:</h2>
            <div className={styles.border_tags}>
              {bordersLoading ? (
                <span className={styles.borders_loading}>Loading...</span>
              ) : (
                borderCountries.map((border) => (
                  <button
                    key={border.cca3}
                    className={styles.border_tag}
                    onClick={() =>
                      navigate(`/${border.cca3}`, { state: { country: border } })
                    }
                  >
                    {border.name}
                  </button>
                ))
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};


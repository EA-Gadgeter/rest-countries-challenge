import type { RawCountry } from "@/types/rawCountry";
import type { Country } from "@/types/country";

export const mapCountry = (raw: RawCountry): Country => {
  const nativeNameValues = raw.name.nativeName
    ? Object.values(raw.name.nativeName)
    : [];

  return {
    cca3: raw.cca3,
    name: raw.name.common,
    nativeName: nativeNameValues[0]?.common,
    flag: { svg: raw.flags.svg, png: raw.flags.png },
    population: raw.population,
    region: raw.region,
    subregion: raw.subregion,
    capital: raw.capital?.[0],
    tld: raw.tld,
    currencies: raw.currencies
      ? Object.values(raw.currencies).map((c) => c.name)
      : undefined,
    languages: raw.languages ? Object.values(raw.languages) : undefined,
    borders: raw.borders,
  };
};

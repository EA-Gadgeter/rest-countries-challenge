import { API_BASE_URL, CARD_FIELDS, DETAIL_FIELDS } from "@/conts/api";
import { mapCountry } from "@/utils/countryMapper";

import type { Country } from "@/types/country";
import type { RawCountry } from "@/types/rawCountry";

export interface CountryDetail {
  subregion?: string;
  tld?: string[];
  currencies?: string[];
  languages?: string[];
  borders?: string[];
}

export const getCountryCardByCode = async (cca3: string): Promise<Country> => {
  const response = await fetch(`${API_BASE_URL}/alpha/${cca3}?fields=${CARD_FIELDS}`);

  if (!response.ok) throw new Error("Failed to fetch country");

  const raw: RawCountry = await response.json();
  return mapCountry(raw);
};

export const getCountryByCode = async (cca3: string): Promise<CountryDetail> => {
  const response = await fetch(`${API_BASE_URL}/alpha/${cca3}?fields=${DETAIL_FIELDS}`);

  if (!response.ok) throw new Error("Failed to fetch country detail");

  const raw: Partial<RawCountry> = await response.json();

  return {
    subregion: raw.subregion,
    tld: raw.tld,
    currencies: raw.currencies
      ? Object.values(raw.currencies).map((c) => c.name)
      : undefined,
    languages: raw.languages ? Object.values(raw.languages) : undefined,
    borders: raw.borders,
  };
};

export const getBorderCountries = async (codes: string[]): Promise<Country[]> => {
  const response = await fetch(
    `${API_BASE_URL}/alpha?codes=${codes.join(",")}&fields=${CARD_FIELDS}`
  );

  if (!response.ok) throw new Error("Failed to fetch border countries");

  const rawData: RawCountry[] = await response.json();
  return rawData.map(mapCountry);
};

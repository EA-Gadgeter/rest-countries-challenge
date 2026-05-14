import { API_BASE_URL, CARD_FIELDS } from "@/conts/api";
import { mapCountry } from "@/utils/countryMapper";

import type { Country } from "@/types/country";
import type { RawCountry } from "@/types/rawCountry";

interface Options {
  search?: string;
  region?: string | null;
}

export const getCountries = async ({ search = "", region = null }: Options = {}): Promise<Country[]> => {
  const trimmedSearch = search.trim();

  let url: string;

  if (!trimmedSearch && !region) {
    url = `${API_BASE_URL}/all?fields=${CARD_FIELDS}`;
  } else if (!trimmedSearch && region) {
    url = `${API_BASE_URL}/region/${encodeURIComponent(region)}?fields=${CARD_FIELDS}`;
  } else {
    // Name search — region is filtered client-side if also set
    url = `${API_BASE_URL}/name/${encodeURIComponent(trimmedSearch)}?fields=${CARD_FIELDS}`;
  }

  const response = await fetch(url);

  // 404 means no countries matched — treat as empty, not an error
  if (response.status === 404) return [];
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

  const rawData: RawCountry[] = await response.json();
  let countries = rawData.map(mapCountry);

  // The /name endpoint doesn't support a region param, so filter client-side
  if (trimmedSearch && region) {
    countries = countries.filter((c) => c.region === region);
  }

  return countries;
};

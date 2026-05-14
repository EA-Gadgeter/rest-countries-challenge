import { useMemo } from "react";

import rawData from "@/mock/data.json";

import type { Country } from "@/types/country";

const allCountries = rawData as Country[];

interface Options {
  search?: string;
  region?: string | null;
}

export const useCountries = ({ search = "", region = null }: Options = {}) => {
  return useMemo(() => {
    const searchLower = search.toLowerCase().trim();
    return allCountries.filter((country) => {
      const matchesSearch = !searchLower || country.name.toLowerCase().includes(searchLower);
      const matchesRegion = !region || country.region === region;
      return matchesSearch && matchesRegion;
    });
  }, [search, region]);
};

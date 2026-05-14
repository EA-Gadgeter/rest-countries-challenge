import { useState, useEffect } from "react";

import { getCountries } from "@/services/getCountries";

import type { Country } from "@/types/country";

interface Options {
  search?: string;
  region?: string | null;
}

interface UseCountriesResult {
  countries: Country[];
  isLoading: boolean;
  error: string | null;
}

export const useCountries = ({ search = "", region = null }: Options = {}): UseCountriesResult => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const trimmedSearch = search.trim();

    // Debounce only when searching by name to avoid hitting the API on every keystroke
    const debounceMs = trimmedSearch ? 350 : 0;

    setIsLoading(true);
    setError(null);

    const timer = setTimeout(async () => {
      try {
        const result = await getCountries({ search, region });
        if (!cancelled) {
          setCountries(result);
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Something went wrong");
          setIsLoading(false);
        }
      }
    }, debounceMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [search, region]);

  return { countries, isLoading, error };
};


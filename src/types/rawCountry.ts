export interface RawCountry {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: { svg: string; png: string; alt?: string };
  tld?: string[];
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}

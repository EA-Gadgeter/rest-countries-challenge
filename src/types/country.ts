export interface Country {
  name: string;
  alpha3Code: string;
  capital?: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  subregion?: string;
  nativeName?: string;
  topLevelDomain?: string[];
  currencies?: Array<{ code: string; name: string; symbol: string }>;
  languages?: Array<{ iso639_1?: string; iso639_2?: string; name: string; nativeName?: string }>;
  borders?: string[];
}

export interface Country {
  cca3: string;
  name: string;
  nativeName?: string;
  flag: { svg: string; png: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string;
  tld?: string[];
  currencies?: string[];
  languages?: string[];
  borders?: string[];
}

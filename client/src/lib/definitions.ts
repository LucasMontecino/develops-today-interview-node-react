export type CountryTipe = {
  countryCode: string;
  name: string;
};

export type BorderType = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderType[];
};

export type FlagType = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
};

export type PopulationType = {
  country: string;
  code: string;
  iso3: string;
  populationCounts: [{ year: string | number; value: number }];
};

import { LatLngExpression } from "leaflet";

export interface CountriesData {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  latlng: LatLngExpression;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  capitalInfo: {
    latlng: LatLngExpression;
  };
}

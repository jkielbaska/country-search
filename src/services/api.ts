import axios, { AxiosError } from "axios";
import { CountriesData } from "../types/tCountriesData";

const apiBase = "https://restcountries.com/v3.1";

export const api = axios.create({
  baseURL: apiBase,
});

export const getAllCountries = async () => {
  try {
    const response = await api.get<CountriesData[]>("/all");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCountryByName = async (name: string) => {
  try {
    const response = await api.get<CountriesData[]>(`/name/${name}`);
    return response.data;
  } catch (error: unknown) {
    if (
      error instanceof AxiosError &&
      error.response &&
      error.response.status === 404
    ) {
      throw error;
    } else {
      console.error(error);
    }
  }
};

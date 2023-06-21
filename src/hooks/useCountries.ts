import { useEffect, useState } from "react";
import { CountriesData } from "../types/tCountriesData";
import {
  getAllCountries,
  getCountryByName,
  getCountryByCapital,
} from "../services/api";
import { useAppSelector } from "../redux/hooks";
import { selectorSearch } from "../redux/slices/searchSlice";
import { selectorSearchType } from "../redux/slices/searchTypeSlice";

export const useCountries = () => {
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const search = useAppSelector(selectorSearch);
  const searchType = useAppSelector(selectorSearchType);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError("");
        if (!search) {
          const response = await getAllCountries();
          response && setCountries([...response]);
        }
        if (search && searchType === "country") {
          const response = await getCountryByName(search).catch(() => []);
          {
            response?.length === 0
              ? setError("No country found")
              : response && setCountries([...response]);
          }
        }
        if (search && searchType === "capital") {
          const response = await getCountryByCapital(search).catch(() => []);
          {
            response?.length === 0
              ? setError("No capital found")
              : response && setCountries([...response]);
          }
        }
        if (search && searchType === "both") {
          const byName =
            search && (await getCountryByName(search).catch(() => []));
          const byCapital =
            search && (await getCountryByCapital(search).catch(() => []));

          const mergedResponse = [...(byName ?? []), ...(byCapital ?? [])];
          const filteredResponse = mergedResponse.reduce<CountriesData[]>(
            (acc, country) => {
              const existingCountry = acc.find(
                (c) => c?.cca2 === (country as CountriesData)?.cca2
              );
              if (!existingCountry) {
                acc.push(country as CountriesData);
              }
              return acc;
            },
            [] as CountriesData[]
          );
          filteredResponse.length === 0
            ? setError("No country or capital found, try again")
            : setCountries(filteredResponse);
        }
      } catch (error: unknown) {
        console.error(error);
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [search, searchType]);

  return { countries, loading, error };
};

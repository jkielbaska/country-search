import { useEffect, useState } from "react";
import { CountriesData } from "../types/tCountriesData";
import { getAllCountries, getCountryByName } from "../services/api";
import { useAppSelector } from "../redux/hooks";
import { selectorSearch } from "../redux/slices/searchSlice";
import { AxiosError } from "axios";

export const useCountries = () => {
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = useAppSelector(selectorSearch);

  useEffect(() => {
    const fetchCountries = async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

        if (search === "") {
          const response = await getAllCountries();
          response && setCountries(response);
        } else {
          const response = search && (await getCountryByName(search));
          response && setCountries(response);
        }
      } catch (error: unknown) {
        console.error(error);
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.status === 404
        ) {
          setError("No country found, try another one");
        } else {
          setError("An error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [search]);

  return { countries, loading, error };
};

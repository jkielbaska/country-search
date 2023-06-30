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
        const allResponse =
          !search && (await getAllCountries().catch(() => []));

        const byName =
          searchType === "country" &&
          search &&
          (await getCountryByName(search).catch(() => []));

        const byCapital =
          searchType === "capital" &&
          search &&
          (await getCountryByCapital(search).catch(() => []));

        let mergedResponse = [
          ...(byName ? byName : []),
          ...(byCapital ? byCapital : []),
        ];

        if (searchType === "both" && search) {
          const byNameAndCapital = await Promise.all([
            getCountryByName(search).catch(() => []),
            getCountryByCapital(search).catch(() => []),
          ]);

          mergedResponse = [
            ...mergedResponse,
            ...(byNameAndCapital[0] ? byNameAndCapital[0] : []),
            ...(byNameAndCapital[1] ? byNameAndCapital[1] : []),
          ];
        }

        const filteredMerge = mergedResponse.reduce<CountriesData[]>(
          (acc, country) =>
            acc.find((c) => c?.cca2 === (country as CountriesData)?.cca2)
              ? acc
              : [...acc, country as CountriesData],
          []
        );
        const byBoth =
          searchType === "both" && search && filteredMerge.length > 0
            ? filteredMerge
            : [];

        const errorMessage =
          search && mergedResponse.length === 0
            ? searchType === "both"
              ? "No country or capital found, try again"
              : searchType === "country"
              ? "No country found"
              : "No capital found"
            : "";
        {
          allResponse
            ? setCountries(allResponse)
            : byName
            ? setCountries(byName)
            : byCapital
            ? setCountries(byCapital)
            : setCountries(byBoth);
        }
        setError(errorMessage);
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
// import { useEffect, useState } from "react";
// import { CountriesData } from "../types/tCountriesData";
// import {
//   getAllCountries,
//   getCountryByName,
//   getCountryByCapital,
// } from "../services/api";
// import { useAppSelector } from "../redux/hooks";
// import { selectorSearch } from "../redux/slices/searchSlice";
// import { selectorSearchType } from "../redux/slices/searchTypeSlice";

// export const useCountries = () => {
//   const [countries, setCountries] = useState<CountriesData[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string>("");
//   const search = useAppSelector(selectorSearch);
//   const searchType = useAppSelector(selectorSearchType);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         if (!search) {
//           const response = await getAllCountries();
//           response && setCountries([...response]);
//         }
//         if (search && searchType === "country") {
//           const response = await getCountryByName(search).catch(() => []);
//           {
//             response?.length === 0
//               ? setError("No country found")
//               : response && setCountries([...response]);
//           }
//         }
//         if (search && searchType === "capital") {
//           const response = await getCountryByCapital(search).catch(() => []);
//           {
//             response?.length === 0
//               ? setError("No capital found")
//               : response && setCountries([...response]);
//           }
//         }
//         if (search && searchType === "both") {
//           const byName =
//             search && (await getCountryByName(search).catch(() => []));
//           const byCapital =
//             search && (await getCountryByCapital(search).catch(() => []));

//           const mergedResponse = [...(byName ?? []), ...(byCapital ?? [])];
//           const filteredResponse = mergedResponse.reduce<CountriesData[]>(
//             (acc, country) => {
//               const existingCountry = acc.find(
//                 (c) => c?.cca2 === (country as CountriesData)?.cca2
//               );
//               if (!existingCountry) {
//                 acc.push(country as CountriesData);
//               }
//               return acc;
//             },
//             [] as CountriesData[]
//           );
//           filteredResponse.length === 0
//             ? setError("No country or capital found, try again")
//             : setCountries(filteredResponse);
//         }
//       } catch (error: unknown) {
//         console.error(error);
//         setError("An error occurred. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCountries();
//   }, [search, searchType]);

//   return { countries, loading, error };
// };

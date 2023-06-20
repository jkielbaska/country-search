import { SearchForm } from "./SearchForm";
import { useCountries } from "../../hooks/useCountries";
import { CountriesData } from "../../types/tCountriesData";
import { useAppDispatch } from "../../redux/hooks";
import { setLatlng } from "../../redux/slices/latlngSlice";

export const CountriesList = () => {
  const { countries, loading, error } = useCountries();
  const dispatch = useAppDispatch();

  return (
    <div className="w-[30%] bg-blue-500 text-gray-100 h-full overflow-y-scroll overflow-x-hidden">
      <SearchForm />
      {loading && (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner loading-lg" />
        </div>
      )}
      {error && <div>Error: {error}</div>}
      {!loading &&
        !error &&
        countries?.map((country: CountriesData) => (
          <div
            className="cursor-pointer p-2 m-1 flex flex-col items-center text-center bg-gray-400 rounded-md "
            key={country.flag}
            onClick={() => dispatch(setLatlng(country.capitalInfo.latlng))}
          >
            <img alt="flag" src={country.flags.png} width={50} height={40} />
            <p className="font-bold text-lg">{country.name.common}</p>
            <div className="pt-2">
              {country.currencies &&
              Object.keys(country.currencies).length > 1 ? (
                <p className="font-semibold">currencies: </p>
              ) : (
                <p className="font-semibold">currency: </p>
              )}
              {country.currencies &&
                Object.keys(country.currencies).map((currencyKey) => (
                  <p className="" key={currencyKey}>
                    {country.currencies[currencyKey].name}
                  </p>
                ))}
              {country.capital?.length > 1 ? (
                <p className="font-semibold">capitals: </p>
              ) : (
                <p className="font-semibold">capital: </p>
              )}
              {country.capital?.map((city: string) => (
                <p key={city}>{city}</p>
              ))}
              <p className="font-semibold">population:</p>
              <p>{country.population}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

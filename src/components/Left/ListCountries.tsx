import { useState } from "react";
import { SearchForm } from "./SearchForm";
import { useCountries } from "../../hooks/useCountries";
import { CountriesData } from "../../types/tCountriesData";
import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import { selectorLatlng } from "../../redux/slices/latlngSlice";
import { CardCountry } from "./CardCountry";

export const ListCountries = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { countries, loading, error } = useCountries();
  const dispatch = useAppDispatch();
  const latlng = useAppSelector(selectorLatlng);

  const handleToggle = () => {
    setOpen((current) => !current);
  };

  return (
    <>
      <div
        className={`md:side-menu md:w-[30%] md:h-full h-[35%] ${
          open ? "side-menu" : "hidden"
        }`}
      >
        <SearchForm />
        {loading && (
          <div className="w-full flex justify-center pt-2">
            <span className="loading loading-spinner loading-lg" />
          </div>
        )}
        {error && <div className="text-xl text-center pt-2">{error}</div>}
        {!loading &&
          !error &&
          countries?.map((country: CountriesData) => (
            <CardCountry
              key={country.cca2}
              country={country}
              dispatch={dispatch}
              latlng={latlng}
            />
          ))}
      </div>
      <button
        onClick={handleToggle}
        className={`md:hidden w-full h-10  ${
          open && " border-t-4 border-black"
        } `}
      >
        {open ? "CLOSE SEARCH" : "CLICK TO SEARCH COUNTRIES"}
      </button>
    </>
  );
};

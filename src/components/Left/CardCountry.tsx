import { CountriesData } from "../../types/tCountriesData";
import { setLatlng } from "../../redux/slices/latlngSlice";
import type { AppDispatch } from "../../redux/store";
import { LatLngExpression } from "leaflet";

export const CardCountry = ({
  country,
  latlng,
  dispatch,
}: {
  country: CountriesData;
  latlng: LatLngExpression;
  dispatch: AppDispatch;
}) => {
  return (
    <div
      className={`${
        country.capitalInfo.latlng === latlng
          ? "bg-base-200 border-2 border-secondary"
          : country.latlng === latlng
          ? "bg-base-200 border-2 border-secondary"
          : "bg-secondary"
      } cursor-pointer p-2 m-2 flex flex-col items-center text-center `}
      onClick={() => {
        dispatch(
          country.capitalInfo.latlng
            ? setLatlng(country.capitalInfo.latlng)
            : setLatlng(country.latlng)
        );
      }}
    >
      <p className="font-bold text-lg">{country.name.common}</p>
      <img
        alt={`flag of ${country.name.common}`}
        src={country.flags.png}
        width={50}
        height={40}
      />
      <div className="pt-2">
        {country.currencies && Object.keys(country.currencies).length > 1 ? (
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
  );
};

// import { useState } from "react";
// import { SearchForm } from "./SearchForm";
// import { useCountries } from "../../hooks/useCountries";
// import { CountriesData } from "../../types/tCountriesData";
// import { useAppDispatch } from "../../redux/hooks";
// import { useAppSelector } from "../../redux/hooks";
// import { selectorLatlng } from "../../redux/slices/latlngSlice";
// import { CountryCard } from "./CountryCard";

// export const CountriesList = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   const { countries, loading, error } = useCountries();
//   const dispatch = useAppDispatch();
//   const latlng = useAppSelector(selectorLatlng);

//   const handleToggle = () => {
//     setOpen((current) => !current);
//   };

//   return (
//     <>
//       <button onClick={handleToggle} className="md:hidden">
//         COUNTRIES
//       </button>
//       <div className={`md:menu ${open ? "menu" : "hidden"}`}>
//         <SearchForm />
//         {loading && (
//           <div className="w-full flex justify-center pt-2">
//             <span className="loading loading-spinner loading-lg" />
//           </div>
//         )}
//         {error && <div className="text-xl text-center pt-2">{error}</div>}
//         {!loading &&
//           !error &&
//           countries?.map((country: CountriesData) => (
//             <CountryCard
//               country={country}
//               dispatch={dispatch}
//               latlng={latlng}
//             />
//           ))}
//       </div>
//     </>
//   );
// };

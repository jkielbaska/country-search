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

// import { SearchForm } from "./SearchForm";
// import { useCountries } from "../../hooks/useCountries";
// import { CountriesData } from "../../types/tCountriesData";
// import { useAppDispatch } from "../../redux/hooks";
// import { setLatlng } from "../../redux/slices/latlngSlice";
// import { useAppSelector } from "../../redux/hooks";
// import { selectorLatlng } from "../../redux/slices/latlngSlice";

// export const ListCountries = () => {
//   const { countries, loading, error } = useCountries();
//   const dispatch = useAppDispatch();
//   const latlng = useAppSelector(selectorLatlng);

//   return (
//     <div className="side-menu">
//       <SearchForm />
//       {loading && (
//         <div className="w-full flex justify-center pt-2">
//           <span className="loading loading-spinner loading-lg" />
//         </div>
//       )}
//       {error && <div className="text-xl text-center pt-2">{error}</div>}
//       {!loading &&
//         !error &&
//         countries?.map((country: CountriesData) => (
//           <div
//             className={`${
//               country.capitalInfo.latlng === latlng
//                 ? "bg-gray-800"
//                 : country.latlng === latlng
//                 ? "bg-gray-800"
//                 : "bg-gray-400"
//             } cursor-pointer p-2 m-1 flex flex-col items-center text-center rounded-md`}
//             // className="cursor-pointer p-2 m-1 flex flex-col items-center text-center bg-gray-400 rounded-md"
//             key={country.cca2}
//             onClick={() => {
//               dispatch(
//                 country.capitalInfo.latlng
//                   ? setLatlng(country.capitalInfo.latlng)
//                   : setLatlng(country.latlng)
//               );
//             }}
//           >
//             <img alt="flag" src={country.flags.png} width={50} height={40} />
//             <p className="font-bold text-lg">{country.name.common}</p>
//             <div className="pt-2">
//               {country.currencies &&
//               Object.keys(country.currencies).length > 1 ? (
//                 <p className="font-semibold">currencies: </p>
//               ) : (
//                 <p className="font-semibold">currency: </p>
//               )}
//               {country.currencies &&
//                 Object.keys(country.currencies).map((currencyKey) => (
//                   <p className="" key={currencyKey}>
//                     {country.currencies[currencyKey].name}
//                   </p>
//                 ))}
//               {country.capital?.length > 1 ? (
//                 <p className="font-semibold">capitals: </p>
//               ) : (
//                 <p className="font-semibold">capital: </p>
//               )}
//               {country.capital?.map((city: string) => (
//                 <p key={city}>{city}</p>
//               ))}
//               <p className="font-semibold">population:</p>
//               <p>{country.population}</p>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

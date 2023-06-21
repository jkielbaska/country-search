import { useSearchCountries } from "../../hooks/useSearchCountries";

export const SearchForm = () => {
  const {
    form: { handleAddSearch, register },
  } = useSearchCountries();

  return (
    <form onSubmit={handleAddSearch}>
      <input
        type="search"
        placeholder="SEARCH COUNTRY OR CAPITAL"
        className="input text-center w-full"
        {...register("search")}
      />

      <button type="submit" className="btn btn-active w-full ">
        find
      </button>
    </form>
  );
};

import { useSearchCountries } from "../../hooks/useSearchCountries";

export const SearchForm = () => {
  const {
    form: { handleAddComment, register },
  } = useSearchCountries();

  return (
    <form onSubmit={handleAddComment}>
      <input
        type="search"
        placeholder="search country or capital"
        className="input text-center w-full"
        {...register("search")}
      />

      <button
        type="submit"
        className="btn btn-active w-full "
        placeholder="explore"
      >
        find
      </button>
    </form>
  );
};

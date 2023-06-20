import { useSearchCountries } from "../../hooks/useSearchCountries";

export const SearchForm = () => {
  const {
    isSubmitting,
    form: {
      handleAddComment,
      register,
      formState: { errors },
    },
  } = useSearchCountries();

  console.log(errors);
  return (
    <form onSubmit={handleAddComment}>
      <input
        type="text"
        placeholder="search country"
        className="input input-bordered w-full"
        {...register("search", { min: 1 })}
      />

      <input
        type="submit"
        className="btn btn-outline w-full"
        placeholder="explore"
      />
    </form>
  );
};

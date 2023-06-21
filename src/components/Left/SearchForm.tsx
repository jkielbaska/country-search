import { useState } from "react";
import { useSearchCountries } from "../../hooks/useSearchCountries";

export const SearchForm = () => {
  const {
    form: { handleAddSearch, register },
  } = useSearchCountries();

  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form onSubmit={handleAddSearch}>
      <input
        type="search"
        placeholder={
          selectedOption === ""
            ? "SELECT FILTERING TYPE FIRST"
            : `SEARCH ${selectedOption.toUpperCase()}`
        }
        className={`input text-center w-full ${
          selectedOption === "" && "cursor-not-allowed"
        }`}
        {...register("search")}
        disabled={selectedOption === ""}
      />
      <select
        className="select w-full"
        {...register("type")}
        onChange={handleOptionChange}
        defaultValue=""
      >
        <option disabled value="">
          CHOOSE FILTERING TYPE
        </option>
        <option value="country">COUNTRY</option>
        <option value="capital">CAPITAL</option>
        <option value="both">BOTH</option>
      </select>
      <button
        type="submit"
        className="btn btn-active w-full"
        disabled={selectedOption === ""}
      >
        {selectedOption === "" ? "SELECT FILTERING TYPE FIRST" : "FIND"}
      </button>
    </form>
  );
};

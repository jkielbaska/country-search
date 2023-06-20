import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../redux/hooks";
import { setSearch } from "../redux/slices/searchSlice";

const SearchSchema = z.object({
  search: z.string(),
});

type SearchSchemaType = z.infer<typeof SearchSchema>;

export const useSearchCountries = () => {
  const { handleSubmit, ...form } = useForm<SearchSchemaType>({
    resolver: zodResolver(SearchSchema),
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: SearchSchemaType) => {
    dispatch(setSearch(data.search));
  };

  return {
    form: { handleAddComment: handleSubmit(onSubmit), ...form },
  };
};

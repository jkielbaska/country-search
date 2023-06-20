import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../redux/hooks";
import { setSearch } from "../redux/slices/searchSlice";

const searchSchema = z.object({
  search: z.string(),
});

type SearchSchemaType = z.infer<typeof searchSchema>;

export const useSearchCountries = () => {
  const dispatch = useAppDispatch();

  const { handleSubmit, ...form } = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = async (data: SearchSchemaType) => {
    dispatch(setSearch(data.search));
  };

  return {
    form: { handleAddComment: handleSubmit(onSubmit), ...form },
  };
};

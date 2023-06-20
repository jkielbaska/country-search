import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  search: z.string().min(1, { message: "required" }),
});

type SearchSchemaType = z.infer<typeof searchSchema>;

export const useSearchCountries = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSubmit, ...form } = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = async (data: SearchSchemaType) => {
    setIsSubmitting(true);
    console.log(data);
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    form: { handleAddComment: handleSubmit(onSubmit), ...form },
  };
};

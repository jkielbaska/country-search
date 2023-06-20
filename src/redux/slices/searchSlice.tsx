import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface searchState {
  search: string | null;
}

const initialState: searchState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const selectorSearch = (state: RootState) => state.search.search;
export const { setSearch } = searchSlice.actions;
export default searchSlice;

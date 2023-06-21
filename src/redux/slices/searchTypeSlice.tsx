import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface searchTypeState {
  searchType: string | null;
}

const initialState: searchTypeState = {
  searchType: "",
};

const searchTypeSlice = createSlice({
  name: "searchType",
  initialState,
  reducers: {
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload;
    },
  },
});

export const selectorSearchType = (state: RootState) =>
  state.searchType.searchType;
export const { setSearchType } = searchTypeSlice.actions;
export default searchTypeSlice;

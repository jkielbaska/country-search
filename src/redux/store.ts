import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import latlngSlice from "./slices/latlngSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    latlng: latlngSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

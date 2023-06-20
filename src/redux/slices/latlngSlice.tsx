import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LatLngExpression } from "leaflet";

interface latlngState {
  latlng: LatLngExpression;
}

const initialState: latlngState = {
  latlng: [51.505, -0.09],
};

const latlngSlice = createSlice({
  name: "latlng",
  initialState,
  reducers: {
    setLatlng: (state, action: PayloadAction<LatLngExpression>) => {
      state.latlng = action.payload;
    },
  },
});

export const selectorLatlng = (state: RootState) => state.latlng.latlng;
export const { setLatlng } = latlngSlice.actions;
export default latlngSlice;

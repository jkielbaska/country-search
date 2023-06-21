import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LatLngExpression } from "leaflet";

interface latlngState {
  latlng: LatLngExpression;
}

export const initialLatLng: LatLngExpression = [10, 0];

const initialState: latlngState = {
  latlng: initialLatLng,
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

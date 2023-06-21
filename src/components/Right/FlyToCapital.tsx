import L from "leaflet";
import { useMap } from "react-leaflet";
import { selectorLatlng } from "../../redux/slices/latlngSlice";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { initialLatLng } from "../../redux/slices/latlngSlice";

export const FlyToCapital = () => {
  const latlng = useAppSelector(selectorLatlng);
  const map = useMap();

  useEffect(() => {
    latlng !== initialLatLng &&
      map.setView(L.latLng(latlng), 6.5, {
        animate: true,
      });
  }, [latlng, map]);

  return null;
};

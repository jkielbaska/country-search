import L from "leaflet";
import { useMap } from "react-leaflet";
import { selectorLatlng } from "../../redux/slices/latlngSlice";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

export const FlyToCapital = () => {
  const latlng = useAppSelector(selectorLatlng);
  const map = useMap();

  useEffect(() => {
    map.setView(L.latLng(latlng), map.getZoom(), { animate: true });
  }, [latlng, map]);

  return null;
};

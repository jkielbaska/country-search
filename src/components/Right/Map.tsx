import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { initialLatLng } from "../../redux/slices/latlngSlice";
import { selectorLatlng } from "../../redux/slices/latlngSlice";
import { useAppSelector } from "../../redux/hooks";
import { FlyToCapital } from "./FlyToCapital";

const icon = L.icon({
  iconUrl: "/pin-icon.png",
  iconSize: [20, 35],
});

export const Map = () => {
  const latlng = useAppSelector(selectorLatlng);

  return (
    <div className="md:w-[70%] w-full bg-slate-400 h-screen">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={latlng}
        zoom={2}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {latlng !== initialLatLng && <Marker position={latlng} icon={icon} />}

        <FlyToCapital />
      </MapContainer>
    </div>
  );
};

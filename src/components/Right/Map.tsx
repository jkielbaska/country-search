import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { selectorLatlng } from "../../redux/slices/latlngSlice";
import { useAppSelector } from "../../redux/hooks";
import { FlyToCapital } from "./FlyToCapital";

const icon = L.icon({
  iconUrl: "/pin-icon.png",
  iconSize: [25, 41],
});

export const Map = () => {
  const latlng = useAppSelector(selectorLatlng);

  return (
    <div className="w-[70%] bg-slate-400 h-screen">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={latlng}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latlng} icon={icon}></Marker>

        <FlyToCapital />
      </MapContainer>
    </div>
  );
};

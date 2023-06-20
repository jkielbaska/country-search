import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

const icon = L.icon({
  iconUrl: "/pin-icon.png",
  iconSize: [25, 41],
});

export const Map = ({
  latlng = [51.505, -0.09],
}: {
  latlng: LatLngExpression;
}) => {
  return (
    <div className="w-[70%] bg-slate-400 h-screen">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={latlng}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latlng} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

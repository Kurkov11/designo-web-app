import classes from "./LocationSection.module.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
export default function LocationSection({
  title,
  children,
  className = "",
  coordinates,
  ...params
}) {
  let fullClass = `${classes.section} ${className}`;
  return (
    <section className={fullClass} {...params}>
      <MapContainer center={coordinates} zoom={14} className={classes.img}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <div className={classes.text}>
        <h2>{title}</h2>
        {
          // Unicode non-breaking space - create an empty paragraph that has a height
        }
        {children}
      </div>
    </section>
  );
}

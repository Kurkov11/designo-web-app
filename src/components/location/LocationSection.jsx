import classes from "./LocationSection.module.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { MapContainer, TileLayer } from "react-leaflet";
export default function LocationSection({
  title,
  children,
  className = "",
  coordinates,
  id,
}) {
  let fullClass = `${classes.section} ${className}`;

  // Scrolling to this section if it is entered as a dynamic part of url
  const { location } = useParams();
  const thisSection = useRef();
  useEffect(() => {
    console.log("effect");
    if (location === id) {
      thisSection.current?.scrollIntoView();
    }
  }, [thisSection.current, location, id]);

  return (
    <section ref={thisSection} className={fullClass} id={id}>
      <MapContainer center={coordinates} zoom={14} className={classes.map}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <div className={classes.text}>
        <div>
          <h2>{title}</h2>
          {
            // Unicode non-breaking space - create an empty paragraph that has a height
          }
          {children}
        </div>
      </div>
    </section>
  );
}

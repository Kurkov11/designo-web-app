import classes from "./LocationSection.module.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import { motion, useInView, useAnimate } from "framer-motion";

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

  const [textScope, animate] = useAnimate();
  const isTextInView = useInView(textScope, { once: true });
  useEffect(() => {
    if (isTextInView) {
      animate(textScope.current, { y: 0, opacity: 1 }, { duration: 0.5 });
    }
  }, [isTextInView]);

  return (
    <section ref={thisSection} className={fullClass} id={id}>
      <MapContainer center={coordinates} zoom={14} className={classes.map}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <div className={classes.text}>
        <motion.div ref={textScope} initial={{ y: -15, opacity: 0 }}>
          <h2>{title}</h2>
          {
            // Unicode non-breaking space - create an empty paragraph that has a height
          }
          {children}
        </motion.div>
      </div>
    </section>
  );
}

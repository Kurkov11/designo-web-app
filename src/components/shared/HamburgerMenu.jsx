import { Link } from "react-router-dom";
import classes from "./HamburgerMenu.module.css";
import { motion } from "framer-motion";

export default function HamburgerMenu({ onClose }) {
  const links = [
    ["Our Company", "/about"],
    ["Locations", "/locations"],
    ["Contact", "/contact"],
  ];
  const container = {
    hidden: { y: -10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const item = {
    hidden: { y: -10 },
    show: { y: 0 },
  };

  return (
    <motion.nav
      className={classes["hamburger-menu"]}
      initial="hidden"
      animate="show"
    >
      <motion.ul variants={container}>
        {links.map(([title, path]) => (
          <motion.li key={`link-to-${path}`} variants={item}>
            <Link onClick={onClose} to={path}>
              {title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

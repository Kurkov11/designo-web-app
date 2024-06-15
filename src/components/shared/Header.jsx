import { AnimatePresence } from "framer-motion";
import DarkeningOverlay from "./DarkeningOverlay";
import HamburgerMenu from "./HamburgerMenu";
import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const TABLET_QUERY = 768;
export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isTabletQuery, setIsTabletQuery] = useState(false);

  function handleHamburgerToggle() {
    setHamburgerOpen((wasOpen) => {
      // Disable or Enable Scroll
      document.querySelector("body").style.overflowY = wasOpen
        ? "visible"
        : "hidden";

      return !wasOpen;
    });
  }
  function handleHamburgerClose() {
    setHamburgerOpen(false);
    // Enable scroll
    document.querySelector("body").style.overflowY = "visible";
  }

  function addResizeListener() {
    window.addEventListener("resize", () => {
      console.log(window.matchMedia(`(min-width: ${TABLET_QUERY}px)`).matches);
      if (window.matchMedia(`(min-width: ${TABLET_QUERY}px)`).matches) {
        setIsTabletQuery(true);
        console.log("tablet");
      } else {
        setIsTabletQuery(false);
        console.log("not tablet");
      }
    });
  }
  useEffect(addResizeListener, []);
  useEffect(() => handleHamburgerClose, [isTabletQuery === true]);

  const openContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };
  const openPathVariants = {
    hidden: { pathLength: 0, pathOffset: 1 },
    visible: { pathLength: 1, pathOffset: 0 },
  };

  const closedContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };
  const closedPathVariants = {
    hidden: { pathLength: 0, pathOffset: 1 },
    visible: { pathLength: 1, pathOffset: 0 },
  };

  return (
    <motion.header className={classes.wrapper}>
      <div className={classes.header}>
        <Link to="/">
          <motion.img
            className={classes.logo}
            src="/src/assets/images/shared/desktop/logo-dark.webp"
            alt=""
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut" }}
          />
        </Link>
        <button
          className={classes["hamburger"]}
          onClick={handleHamburgerToggle}
        >
          {!hamburgerOpen && (
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.g
                fill="none"
                stroke="#1D1C1E"
                strokeWidth="4"
                variants={openContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.path d="M0 2h24" variants={openPathVariants} />
                <motion.path d="M0 10h24" variants={openPathVariants} />
                <motion.path d="M0 18h24" variants={openPathVariants} />
              </motion.g>
            </svg>
          )}

          {hamburgerOpen && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.g
                variants={closedContainerVariants}
                initial="hidden"
                animate="visible"
                stroke="#1D1C1E"
                strokeWidth="4"
              >
                <motion.path variants={closedPathVariants} d="M3 3 L21 21" />
                <motion.path variants={closedPathVariants} d="M21 3 L3 21" />
              </motion.g>
            </svg>
          )}
        </button>
        <nav className={classes["tablet-nav"]}>
          <ul className={classes["tablet-nav__list"]}>
            <motion.li whileHover={{ y: -2 }}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : ""
                }
                to="/about"
              >
                Our company
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : ""
                }
                to="/locations"
              >
                Locations
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ y: -2 }}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : ""
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </motion.li>
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {hamburgerOpen && <HamburgerMenu onClose={handleHamburgerClose} />}
      </AnimatePresence>
      <AnimatePresence>{hamburgerOpen && <DarkeningOverlay />}</AnimatePresence>
    </motion.header>
  );
}

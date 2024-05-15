import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

export default function MainLayout() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  function handleHamburgerToggle() {
    setHamburgerOpen((wasOpen) => !wasOpen);
  }
  return (
    <>
      <Header
        hamburgerOpen={hamburgerOpen}
        onHamburgerToggle={handleHamburgerToggle}
      />
      {hamburgerOpen && <HamburgerMenu />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header.jsx";
import Footer from "../components/shared/Footer.jsx";
import useScroll from "../components/useScroll.js";

export default function MainLayout() {
  useScroll();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

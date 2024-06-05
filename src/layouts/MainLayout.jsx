import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header.jsx";
import Footer from "../components/shared/Footer.jsx";
import useScroll from "../components/useScroll.js";
export default function MainLayout() {
  useScroll();

  return (
    <>
      <Header />
      {
        //main tag should come from each page (can't use a div to set a background for the sections semantically)
      }
      <Outlet />

      <Footer />
    </>
  );
}

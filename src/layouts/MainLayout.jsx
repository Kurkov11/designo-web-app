import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header.jsx";
import Footer from "../components/shared/Footer.jsx";
import useScrollTop from "../components/useScrollTop.js";
export default function MainLayout() {
  useScrollTop();

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

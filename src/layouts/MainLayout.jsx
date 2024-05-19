import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header.jsx";
import Footer from "../components/shared/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.js";

export default function MainLayout() {
  return (
    <>
      {
        // ScrollToTop ensures that path change triggers window scroll to top
      }
      <ScrollToTop />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

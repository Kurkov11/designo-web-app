import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header.jsx";
import Footer from "../components/shared/Footer.jsx";

export default function MainLayout() {
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

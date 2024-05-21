import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import WebDesignPage from "./pages/web-design/WebDesignPage.jsx";
import AppDesignPage from "./pages/app-design/AppDesignPage.jsx";
import GraphicDesignPage from "./pages/graphic-design/GraphicDesignPage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/app-design" element={<AppDesignPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/locations" element={<LocationsPage />}>
          <Route path=":location" element={<LocationsPage />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

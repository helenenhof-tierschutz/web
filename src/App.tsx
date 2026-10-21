import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimalsPage from "./pages/AnimalsPage";
import ImpressumPage from "./pages/ImpressumPage";
import SatzungPage from "./pages/SatzungPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/unsere-schuetzlinge"
          element={<AnimalsPage />}
        />
        <Route
          path="/ueber-uns"
          element={<AboutPage />}
        />
        <Route path="/unterstuetzen" element={<SupportPage />} />
        <Route path="/satzung" element={<SatzungPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </BrowserRouter>
  );
}
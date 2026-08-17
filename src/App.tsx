import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";

import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="get-involved" element={<GetInvolvedPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Registration from "./pages/Registration";
import Projects from "./pages/Projects";
import ProjectRegistration from "./pages/ProjectRegistration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { initializeThemeToggle } from "./utils/themeToggle";

function App() {
  useEffect(() => {
    initializeThemeToggle();
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/project-registration"
            element={<ProjectRegistration />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

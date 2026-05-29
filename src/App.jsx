import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectDetail from "./Pages/ProjectDetail";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main
        className="page-shell"
        style={{ paddingTop: "clamp(5.5rem, 8vw, 6.5rem)", paddingBottom: "3rem" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;

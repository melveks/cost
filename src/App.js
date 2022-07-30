import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Company from "./components/pages/Company.js";
import Contact from "./components/pages/Contact.js";
import NewProject from "./components/pages/NewProject.js";
import Container from "./components/layout/Container.js";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects.js";
import Project from "./components/pages/Project.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

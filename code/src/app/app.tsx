import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../sections/home";
import Projects from "../sections/projects";
import About from "../sections/about";
import Contact from "../sections/contact";
import Header from "../sections/header";
import Footer from "../sections/footer";
//import Footer from "../sections/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
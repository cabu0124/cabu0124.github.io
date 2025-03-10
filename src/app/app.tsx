import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../pages/home';
import About from '../pages/about';
//import Blog from '../pages/Blog';
import Header from '../components/header';
import Footer from '../components/footer';

function App() {
  const location = useLocation();

  // Desplazar al inicio solo si no hay hash en la URL
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      {/* Padding superior para compensar la altura del header fijo */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
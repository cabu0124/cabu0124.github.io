import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar el clic y desplazamiento
  const handleNavClick = (section: string) => {
    navigate(`/#${section}`);
  };

  // Efecto para manejar el desplazamiento cuando cambias de ruta con un hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const section = location.hash.replace('#', '');
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Depende de toda la location (pathname + hash)

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => handleNavClick('hero')}
          className={`nav-item cursor-pointer ${location.hash === '#hero' ? 'bg-white text-gray-900' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick('projects')}
          className={`nav-item cursor-pointer ${location.hash === '#projects' ? 'bg-white text-gray-900' : ''}`}
        >
          Projects
        </button>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-item cursor-pointer ${isActive ? 'bg-white text-gray-900' : ''}`
          }
        >
          About
        </NavLink>
        <button
          onClick={() => handleNavClick('contact')}
          className={`nav-item cursor-pointer ${location.hash === '#contact' ? 'bg-white text-gray-900' : ''}`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Header;
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar el clic y desplazamiento (para secciones con hashtag)
  const handleNavClick = (section: string) => {
    navigate(`/#${section}`);
  };

  // Función específica para navegar a la raíz (Home)
  const handleHomeClick = () => {
    navigate('/'); // Navega a la raíz
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
  }, [location]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={handleHomeClick}
          className={`nav-item cursor-pointer ${location.pathname === '/' && !location.hash ? 'bg-m3-primary text-m3-on-primary' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick('projects')}
          className={`nav-item cursor-pointer ${location.hash === '#projects' ? 'bg-m3-primary text-m3-on-primary' : ''}`}
        >
          Projects
        </button>
        <button
          onClick={() => handleNavClick('about')}
          className={`nav-item cursor-pointer ${location.hash === '#about' || location.pathname === '/about' ? 'bg-m3-primary text-m3-on-primary' : ''}`}
        >
          About
        </button>
        <button
          onClick={() => handleNavClick('contact')}
          className={`nav-item cursor-pointer ${location.hash === '#contact' ? 'bg-m3-primary text-m3-on-primary' : ''}`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Header;
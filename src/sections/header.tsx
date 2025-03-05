import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/projects" className="nav-item">Projects</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
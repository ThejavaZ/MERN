import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="*:px-1 *:hover:text-blue-500">
      <Link to="/">Inicio</Link>
      <Link to="/users">Usuarios</Link>
      <Link to="/about">Acerca</Link>
    </nav>
  );
};

export default Navbar;

import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          Daniel Igbokwe
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <Link to="/resume">
          <button>Resume</button>
        </Link>
      </ul>
    </nav>
  );
}
export default NavBar;

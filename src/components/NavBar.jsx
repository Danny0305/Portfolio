import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseButton } from "@chakra-ui/react";
import "../styles/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CloseButton
              variant="outline"
              size="sm"
              style={{
                borderColor: "#283618", // Custom border color
                color: "#283618", // Custom text color
              }}
            />
          ) : (
            "☰"
          )}
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

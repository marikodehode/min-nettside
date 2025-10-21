import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './css/navbar.css';

export const NavBar = () => {
  const [open, setOpen] = useState(false); // Brukes på mobil
  const ddRef = useRef(null);
  const location = useLocation();

  // Lukk ved klikk utenfor
  useEffect(() => {
    const handleClick = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Lukk ved sideskifte
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink className="nav-link" to="/" end>Home</NavLink></li>

        <li className={`dropdown ${open ? 'open' : ''}`} ref={ddRef}>
          <button
            className="dropdown-toggle nav-link"
            onClick={() => setOpen(v => !v)} // klikktoggle for mobil
            aria-haspopup="true"
            aria-expanded={open}
          >
            Portfolie
          </button>

          <ul
            className="dropdown-menu"
            onClickCapture={() => setOpen(false)} // lukker ved valg
          >
            <li><Link className="dropdown-item" to="/magasin">Magasin</Link></li>
            <li><Link className="dropdown-item" to="/avis">Avis</Link></li>
            <li><Link className="dropdown-item" to="/logo">Logo</Link></li>
            <li><Link className="dropdown-item" to="/plakat">Plakat</Link></li>
            <li><Link className="dropdown-item" to="/nettside">Nettside</Link></li>
            <li><Link className="dropdown-item" to="/some">SoMe</Link></li>
          </ul>
        </li>

        <li><NavLink className="nav-link" to="/cv">CV</NavLink></li>
        <li><NavLink className="nav-link" to="/kontakt">Kontakt</NavLink></li>
      </ul>
    </nav>
  );
};

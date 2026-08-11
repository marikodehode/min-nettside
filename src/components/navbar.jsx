import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './css/navbar.css';

export const NavBar = () => {
  const [open, setOpen] = useState(null); // 'portfolie', 'cv' eller null
  const navRef = useRef(null);
  const location = useLocation();

  // Lukk ved klikk utenfor
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Lukk ved sideskifte
  useEffect(() => {
    setOpen(null);
  }, [location]);

  return (
    <nav className="navbar" ref={navRef}>
      <ul className="nav-list">
        <li><NavLink className="nav-link" to="/" end>Home</NavLink></li>

        <li className={`dropdown ${open === 'portfolie' ? 'open' : ''}`}>
          <button
            className="dropdown-toggle nav-link"
            onClick={() => setOpen(open === 'portfolie' ? null : 'portfolie')}
            aria-haspopup="true"
            aria-expanded={open === 'portfolie'}
          >
            Portfolie
          </button>

          <ul
            className="dropdown-menu"
            onClickCapture={() => setOpen(null)}
          >
            <li><Link className="dropdown-item" to="/magasin">Magasin</Link></li>
            <li><Link className="dropdown-item" to="/avis">Avis</Link></li>
            <li><Link className="dropdown-item" to="/logo">Logo</Link></li>
            <li><Link className="dropdown-item" to="/plakat">Plakat</Link></li>
            <li><Link className="dropdown-item" to="/nettside">Nettside</Link></li>
            <li><Link className="dropdown-item" to="/some">Sosiale medier</Link></li>
          </ul>
        </li>

        <li className={`dropdown ${open === 'cv' ? 'open' : ''}`}>
          <button
            className="dropdown-toggle nav-link"
            onClick={() => setOpen(open === 'cv' ? null : 'cv')}
            aria-haspopup="true"
            aria-expanded={open === 'cv'}
          >
            Min CV
          </button>

<ul
  className="dropdown-menu"
  onClickCapture={() => setOpen(null)}
>
<li> 
  
<a 
className="dropdown-item" 
href="/cv/Kortversjonen-cv.pdf" 
download > <span>Grafisk CV</span> 

<span className="download-icon" 
aria-label="Last ned"> 

<span className="download-arrow"></span> </span> </a> </li> 

<li> <a className="dropdown-item" 
href="/cv/Fullstendig versjon-cv.pdf" 
download > <span>Master CV</span> 

<span className="download-icon" 
aria-label="Last ned"> 

<span className="download-arrow"></span> </span> </a> </li>
</ul>
        </li>
      </ul>
    </nav>
  );
};
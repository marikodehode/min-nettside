import { Link, useLocation } from 'react-router-dom';
import './css/navbar.css';
import { useState } from 'react';

export const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`navbar ${
        location.pathname === '/portfolieside' ? 'portfolieside-navbar' :
        location.pathname === '/avis' ? 'avis-nav' :
        location.pathname === '/logo' ? 'logo-nav' :
        location.pathname === '/magasin' ? 'magasin-nav' :
        location.pathname === '/some' ? 'some-nav' :
        location.pathname === '/plakat' ? 'plakat-nav' :
        location.pathname === '/nettside' ? 'nettside-nav' :
        'default-class'
      }`}
    >
      <ul className='link'>
        <li>
          <Link to='/'>
            <p className='hovedlinkbar'>Home</p>
          </Link>
        </li>

        {/* --- Dropdown for Portfolie --- */}
        <li
          className='dropdown'
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <p className={`hovedlinkbar ${location.pathname.startsWith('/portfolieside') ? 'portfolieside-link' : ''}`}>
            Portfolie ▾
          </p>

          {isOpen && (
            <ul className='dropdown-menu'>
              <li><Link to='/magasin'>Magasin</Link></li>
              <li><Link to='/avis'>Avis</Link></li>
              <li><Link to='/logo'>Logo</Link></li>
              <li><Link to='/plakat'>Plakat</Link></li>
              <li><Link to='/nettside'>Nettside</Link></li>
              <li><Link to='/some'>SoMe</Link></li>
            </ul>
          )}
        </li>
        {/* --- Slutt på dropdown --- */}

        <li>
          <Link to='/cv'>
            <p className='hovedlinkbar'>CV</p>
          </Link>
        </li>

        <li>
          <Link to='/kontakt'>
            <p className='hovedlinkbar'>Kontakt</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

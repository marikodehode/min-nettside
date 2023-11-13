
import { Link, useLocation } from 'react-router-dom';
import './css/navbar.css';

export const NavBar = () => {
    const location = useLocation();
  
    return (
      <nav
        className={
          `navbar ${
            location.pathname === '/portfolieside' ? 'portfolieside-navbar':
            location.pathname === '/avis' ? 'avis-nav' :
            location.pathname === '/logo' ? 'logo-nav' :
            location.pathname === '/magasin' ? 'magasin-nav' :
            location.pathname === '/some' ? 'some-nav' :
            location.pathname === '/plakat' ? 'plakat-nav' :
            location.pathname === '/nettside' ? 'nettside-nav' :
            'default-class'
          }`
        }
      >
        <ul className='link'>
          <li><Link to='/'>
          <p className='hovedlinkbar'>Home</p>
          </Link></li>

          <li><Link to='/portfolieside'>
          <p className={`hovedlinkbar ${location.pathname === '/portfolieside' ? 'portfolieside-link' : ''}`}>Portfolie</p>
          </Link></li>

          <li><Link to='/cv'>
          <p className='hovedlinkbar'>CV</p>
          </Link></li>

          <li><Link to='/kontakt'>
          <p className='hovedlinkbar'>Kontakt</p>
          </Link></li>
        </ul>
      </nav>
    );
};

import "./pagesCss/portfolieside.css";
import { Link, useNavigate } from 'react-router-dom';
import React, { useLayoutEffect } from 'react';

export const Portfolieside = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    navigate(); // Du må kanskje initialisere navigasjonen på en bestemt måte avhengig av din rutekonfigurasjon
  }, [navigate]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (path) => {
    navigate(path);
    scrollToTop();
  };
    return (
        <>
      <section id="portfolie-section" className="portfolieside">
      
        <div className="portfolieside-container">
        <h1 className="nameTitle-portfolie-siden-head">PORTFOLIE</h1>
        <p className='textfill-portfolieside-head'>Velg det du vil se</p>
        
        <div className="column-wrapper-two">
        <Link to="/avis" onClick={() => handleLinkClick('/avis')} className="phototwo">
<div className="phototwo phototwo1" data-text="Annonser til aviser"></div>
</Link>

<Link to="/some" onClick={() => handleLinkClick('/some')} className="phototwo">
<div className="phototwo phototwo2" data-text="Annonser til sosiale medier"></div>
</Link>

 <Link to="/nettside" onClick={() => handleLinkClick('/nettside')} className="phototwo">
<div className="phototwo phototwo3" data-text="Nettsider"></div>
</Link>

<Link to="/magasin" onClick={() => handleLinkClick('/magasin')} className="phototwo">
<div className="phototwo phototwo4" data-text="Annonser til magasiner"></div>
</Link>

<Link to="/logo" onClick={() => handleLinkClick('/logo')} className="phototwo">
<div className="phototwo phototwo5" data-text="Logoer"></div>
</Link>     

<Link className="phototwo" to="">
<div className="phototwo phototwo6" data-text=
"Nyhetsbrev"></div></Link>

<Link to="/plakat" onClick={() => handleLinkClick('/plakat')} className="photoBigtwo">
<div className="photoBigtwo" data-text="Plakater og rollup"></div>
</Link>
        </div>
        </div>
      </section>
    </>

    );
};
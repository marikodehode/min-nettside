import './css/omPortfolieAttest.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useLayoutEffect } from 'react';

export const OmPortfolieAttest = () => {
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
    return(
<div className='opa'>
    <div className='opa-container'>

{/* /* /////////////////// */
/* /////////Om oss/////// */
/* ///////////////////// */ }

<article className='textbox-om'>
<div className='text-container'>
<h1 className='nameTitle-om'>OM MEG</h1>
<p className='textfill-om'>Mitt navn er Mari Karlsen og jeg har akkurat fullført et kurs i koding og programmering.
Undervisning gikk ut på å lage statiske nettsider med bruk av HTML, CSS, Javascript og Figma. Jeg har lang bakgrunn på grafisk designer og bred erfaring fra firmaer som Amedia, Norli, New Nordic og Motivation Boxes. Så har mye erfaring med oppsett av annonser, brosjyrer, materiell til SoMe, utforming av logoer pluss mye mer.</p>
<h1 className="nameTitle-om">PORTFOLIE</h1>
</div>
</article>


{/* /* /////////////////// */
/* //////Portfolie/////// */
/* ///////////////////// */ }


<section id="portfolie-section" className="portfolie">
<div className="portfolie-container">


<div className="column-wrapper">
<Link to="/avis" onClick={() => handleLinkClick('/avis')} className="photo">
<div className="photo photo1" data-text="Se flere annonser til aviser"></div>
</Link>

<Link to="/some" onClick={() => handleLinkClick('/some')} className="photo">
<div className="photo photo2" data-text="Se flere annonser til sosiale medier"></div>
</Link>

 <Link to="/nettside" onClick={() => handleLinkClick('/nettside')} className="photo">
<div className="photo photo3" data-text="Se hva jeg har lært"></div>
</Link>

<Link to="/magasin" onClick={() => handleLinkClick('/magasin')} className="photo">
<div className="photo photo4" data-text="Se flere annonser til magasiner"></div>
</Link>

<Link to="/logo" onClick={() => handleLinkClick('/logo')} className="photo">
<div className="photo photo5" data-text="Se flere logoer"></div>
</Link>     

<Link className="photo" to="">
<div className="photo photo6" data-text=
"Se flere nyhetsbrev"></div></Link>

<Link to="/plakat" onClick={() => handleLinkClick('/plakat')} className="photoBig">
<div className="photoBig" data-text="Se flere plakater og rollup"></div>
</Link>
</div>
</div>
</section>


{/* /* /////////////////// */
/* /////////Attest/////// */
/* ///////////////////// */ }

<section className="attester">
        <article className='textbox-attest'>

            <div className='text-container'>
            <h1 className='nameTitle-attest'>ATTEST</h1>
            <p className='textfill-attest'>“Mari er en dyktig, samvittighetsfull og ansvarlig medarbeider, som viser høyt engasjement og arbeidsvillighet, som viser høyt engasjement og arbeidsvillig.  Hun gjennomfører sine arbeidsoppgaver svært tilfredstillende, arbeider godt både selvstendig og i samarbeid med andre. Vi gir Mari Frøysnes Karlsen våre beste anbefalinger.”</p>
            </div>
            
            <div className='logo-wrapper'>
            <div className='logo-amedia'></div>
            </div>

        </article>
        </section>

</div>


</div>



    )
}
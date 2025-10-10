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
<p className='textfill-om'>Mitt navn er Mari Karlsen, og jeg jobber for tiden i et vikariat ved Universitetet i Sørøst-Norge, der mine hovedoppgaver er å sette opp og vedlikeholde nettsider. Jeg har lang erfaring som grafisk designer og har jobbet for selskaper som Amedia, Norli, New Nordic og Motivation Boxes. Gjennom min karriere har jeg opparbeidet bred kompetanse innen blant annet utforming av annonser, brosjyrer og materiell til sosiale medier, utvikling av logoer – og mye mer.</p>
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
<div className="photo photo1" data-text="Annonser til aviser"></div>
</Link>

<Link to="/some" onClick={() => handleLinkClick('/some')} className="photo">
<div className="photo photo2" data-text="Annonser til sosiale medier"></div>
</Link>

 <Link to="/nettside" onClick={() => handleLinkClick('/nettside')} className="photo">
<div className="photo photo3" data-text="Nettsider"></div>
</Link>

<Link to="/magasin" onClick={() => handleLinkClick('/magasin')} className="photo">
<div className="photo photo4" data-text="Annonser magasiner"></div>
</Link>

<Link to="/logo" onClick={() => handleLinkClick('/logo')} className="photo">
<div className="photo photo5" data-text="Logoer"></div>
</Link>     

<Link className="photo" to="">
<div className="photo photo6" data-text=
"Nyhetsbrev"></div></Link>

<Link to="/plakat" onClick={() => handleLinkClick('/plakat')} className="photoBig">
<div className="photoBig" data-text="Plakater og rollup"></div>
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
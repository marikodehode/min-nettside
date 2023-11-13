import "./pagesCss/portfolieside.css";
import { Link } from 'react-router-dom'


export const Portfolieside = () => {
    return (
        <>
      <section id="portfolie-section" className="portfolieside">
      
        <div className="portfolieside-container">
        <h1 className="nameTitle-portfolie-siden-head">MARI KARLSEN</h1>
        <p className='textfill-portfolieside-head'>GRAFISK DESIGN PORTFOLIE</p>
        
        <div className="column-wrapper-two">
        <Link className="phototwo" to="/avis">
        <div className="phototwo phototwo1" data-text=
        "Se flere annonser til aviser"></div></Link>

        <Link className="phototwo" to="/some">
        <div className="phototwo phototwo2" data-text=
        "Se flere annonser til sosiale medier"></div></Link>
            
        <Link className="phototwo" to="/nettside">
        <div className="phototwo phototwo3" data-text=
        "Les om min erfaring med nettsider"></div></Link>
            
        <Link className="phototwo" to="/magasin">
        <div className="phototwo phototwo4" data-text=
        "Se flere annonser til magasiner"></div></Link>

        <Link className="phototwo" to="/logo">
        <div className="phototwo phototwo5" data-text=
        "Se flere logoer"></div></Link>

        <Link className="phototwo" to="">
        <div className="phototwo phototwo6" data-text=
        "Se flere nyhetsbrev"></div></Link>

        <Link className="photoBigtwo" to="/plakat">
        <div className="photoBigtwo" data-text=
        "Se flere plakater og rollup"></div></Link>
        </div>
        </div>
      </section>
    </>

    );
};
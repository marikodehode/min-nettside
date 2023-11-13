import "./css/portfolie.css";
import { Link } from 'react-router-dom'


export const PortFolie = () => {


  return (
    <>
      <section id="portfolie-section" className="portfolie">
          <div className="portfolie-container">
          <h1 className="nameTitle-portfolie">PORTFOLIE</h1>

          <div className="column-wrapper">
          <Link className="photo" to="/avis">
          <div className="photo photo1" 
          data-text="Se flere annonser til aviser"></div></Link>

          <Link className="photo" to="/some">
          <div className="photo photo2" data-text=
          "Se flere annonser til sosiale medier"></div></Link>
            
          <Link className="photo" to="/nettside">
          <div className="photo photo3" data-text=
          "Les om min erfaring med nettsider"></div></Link>
            
          <Link className="photo" to="/magasin">
          <div className="photo photo4" data-text=
          "Se flere annonser til magasiner"></div></Link>

          <Link className="photo" to="/logo">
          <div className="photo photo5" data-text=
          "Se flere logoer"></div></Link>

          <Link className="photo" to="">
          <div className="photo photo6" data-text=
          "Se flere nyhetsbrev"></div></Link>

          <Link className="photoBig" to="/plakat">
          <div className="photoBig" data-text=
          "Se flere plakater og rollup"></div></Link>
          </div>

          <h1 className="undertext-portfolien">For mer arbeid ta kontakt</h1>
        </div>


      </section>
    </>
  );
};

import "./pagesCss/undersiderPortfolie.css";

export const Nettside = () => {
  return (
    <section className="nettside">
      <div className="nettside-container">
        <h1 className="nameTitle-nettside">Nettsider</h1>
        <p className="textfill-nettside">Utvalg av mine nettsider</p>

        <div className="column-wrapper-nettside">
          <a
            href="https://usnlearninglibrary.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN1" data-text="USN Learning Library"></div>
          </a>

          <a
            href="https://denpraktiskeskolen.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN2" data-text="Den praktiske skolen"></div>
          </a>

          <a
            href="https://fleksibilisering.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN3" data-text="Fleksibilisering"></div>
          </a>

          <a
            href="https://leselop.usn.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN4" data-text="Leseløp"></div>
          </a>

          <a
            href="https://artskunnskap.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN5" data-text="Arter i arbeid"></div>
          </a>

          <a
            href="https://marikodehode.github.io/vits-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN6" data-text="Vitser av Chuck Norris"></div>
          </a>

          <a
            href="https://marikodehode.github.io/JS-switchcase/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN7" data-text="Velg hovedstad"></div>
          </a>

          <a
            href="https://dyr.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN8" data-text="Er du en hundeperson?"></div>
          </a>

          <a
            href="https://marikodehode.github.io/js-switchcase-two/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN9" data-text="BMI kalkulator"></div>
          </a>

          <a
            href="https://marikodehode.github.io/jsDOM/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN10" data-text="Ut å reise"></div>
          </a>

          <a
            href="https://tipcalculator-bay.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN11" data-text="Kalkulator"></div>
          </a>

          <a
            href="https://marikodehode.github.io/jsDOMappendChild/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="photoN photoN12" data-text="Navngi valpen"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Nettside;

import "./pagesCss/cv.css";

export const Cv = () => {
  return (
    <section className="cv">
    <div className="cv-container">
    <div className="id">
    <div className="photo-profil"></div>
    <div className="text-profil">
    <h1 className="name-profil">MARI KARLSEN</h1>
    <p className="stilling-profil">Grafisk designer</p>
    <p className="stillingTo-profil">& Frontend</p>
    </div>

    <div className="link-container">
    <ul className="linkCV">
    <li><a href="#workexperienceID"><p className="linkcvbar">Arbeidserfaring</p></a></li>
    <li><a href="#educationID"><p className="linkcvbar">Utdanning</p></a></li>
    <li><a href="#coursekexperienceID"><p className="linkcvbar">Kurs</p></a></li>
     </ul>
    </div>
    </div>

    <div className="workexperience">
    
    <section id="workexperienceID" className="jobs">
    <h1 className="nameTitle-cv">MIN CV</h1>
            <p className='textfill-cv'>ARBEIDSERFARING</p>
    <div className="job">
    <div className="timePlaceOne">2021-2022</div>
    <div className="timePlaceTwo">Åsgårdstrand</div>
    <div className="jobName">Motivation Boxes AS</div>
    <div className="jobInfo">
    Ansatt som grafisk designer. Arbeidsoppgaver: Design og utforme digitale annonser, logo, flyer, brosjyrer, nyhetsbrev, brosjyre, journal og oppsett av nettsider. Hjalp til med kundeservice, hvor jeg svarte alle e-post, pluss mye mer. I denne stillingen bistod jeg også i et selskap som het Medikomp. Her drev jeg nettbutikken, bestillinger, kontroll på lager og kundeservice.(På grunn av bedriftens kritiske økonomiske situasjon, så forsvant dessverre min stilling).
    </div>
    <div className="program-container">
    <button className="programButton">Office</button>
    <button className="programButton">Excel</button>
    <button className="programButton">Power Point</button>
    <button className="programButton">Word</button>
    <button className="programButton">WooCommers</button>
    <button className="programButton">WordPress</button>
    <button className="programButton">MailChimp</button>
    <button className="programButton">Kajabi</button>
    <button className="programButton">Canva</button>
    <button className="programButton">Indesign</button>
    <button className="programButton">Photoshop</button>
    <button className="programButton">Illustrator</button>
    <button className="programButton">Strip</button>
    <button className="programButton">Klarna</button>
    <button className="programButton">Instagram</button>
    <button className="programButton">Facebook</button>
    <button className="programButton">Linkedin</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2019</div>
    <div className="timePlaceTwo">Moss</div>
    <div className="jobName">New Nordic AS</div>
    <div className="jobInfo">
    Ansatt som grafisk designer. Arbeidsoppgavene bestod av å utforme og tilpasse annonser, butikkmateriell, vedlikehold av sosiale medier og nyhetsbrev. Har sittet en del med å oversette tekster fra engelsk og dansk til norsk. (Største kunde gikk konkurs, bedriften fikk store tap, og ente med å måtte ta nedbemanning i bedriften).
    </div>
    <div className="program-container">
    <button className="programButton">Office</button>
    <button className="programButton">MailChimp</button>
    <button className="programButton">Indesign</button>
    <button className="programButton">Photoshop</button>
    <button className="programButton">Illustrator</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2019</div>
    <div className="timePlaceTwo">Tønsberg</div>
    <div className="jobName">Maratim Hotell</div>
    <div className="jobInfo">
    Ansatt som resepsjonist/markedskoordinator. Arbeidsoppgavene bestod av booking, svare telefon og e-post fra kunder. Ta imot gjester og hjelpe til med frokosten. Oppsett av sosiale medier, arbeide med logo og reklamemateriell som skulle gå på Facebook. Bistod med å administrerende arbeid som å gå igjennom dokumenter, rettskriving utgående eposter for min sjef og bistå på telefonsamtaler med leverandører, samt flere ulike saker som oppstod. (Byttet arbeidsplass da jeg ble tilbudt stilling hos New Nordic).
    </div>
    <div className="program-container">
    <button className="programButton">Office</button>
    <button className="programButton">Instagram</button>
    <button className="programButton">Facebook</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2018</div>
    <div className="timePlaceTwo">Tønsberg</div>
    <div className="jobName">Amedia Annonseproduksjon</div>
    <div className="jobInfo">
    Ansatt som grafisk designer (Vikariat). Arbeidsoppgavene består i produksjon av annonser og reklamemateriell for Amedia sine konsern aviser. Oppgavene spenner fra mindre enkelt annonser til større produksjoner, samlesider og innstikk, og medfører stor grad av kundekontakt, både med selger/medierådgiver i mediehusene og direkte med annonsør.
    </div>
    <div className="program-container">
    <button className="programButton">Indesign</button>
    <button className="programButton">Photoshop</button>
    <button className="programButton">Illustrator</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2018</div>
    <div className="timePlaceTwo">Torp</div>
    <div className="jobName">CoreTrek (Toptemp)</div>
    <div className="jobInfo">
    Ansatt som markedskonsulent (Vikariat). Arbeidsoppgavene bestod i å ha kontakt med potensielle eller eksisterende kunder når det kom til deres behov for webløsninger, ved å følge opp invitasjon til Coretrek sine seminarer.
    </div>
    <div className="program-container">
    <button className="programButton">Office</button>
    <button className="programButton">Excel</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2016-2017</div>
    <div className="timePlaceTwo">Nydalen</div>
    <div className="jobName">Norli Libris AS</div>
    <div className="jobInfo">
    Ansatt som grafisk designer / markedskonsulent (Vikariat). Arbeidsoppgavene bestod i produksjon av kampanjemateriell for Norli og Libris. Dette bestod av annonser, plakater, nyhetsbrev, bannere og mye mer. Vi jobber tett med butikkene i hele Norge. I tillegg til stillingen satt jeg også i resepsjonen.
    </div>
    <div className="program-container">
    <button className="programButton">Indesign</button>
    <button className="programButton">Photoshop</button>
    <button className="programButton">Illustrator</button>
    <button className="programButton">Facebook</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2013-1015</div>
    <div className="timePlaceTwo">Tønsberg</div>
    <div className="jobName">Amedia Annonseproduksjon</div>
    <div className="jobInfo">
    Ansatt som grafisk designer (Vikariat). Arbeidsoppgavene består i produksjon av annonser og reklamemateriell for Amedia sine konsern aviser. Oppgavene spenner fra mindre enkelt annonser til større produksjoner, samlesider og innstikk, og medfører stor grad av kundekontakt, både med selger/medierådgiver i mediehusene og direkte med annonsør.
    </div>
    <div className="program-container">
    <button className="programButton">Indesign</button>
    <button className="programButton">Photoshop</button>
    <button className="programButton">Illustrator</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2012-2013</div>
    <div className="timePlaceTwo">Oslo</div>
    <div className="jobName">NSB</div>
    <div className="jobInfo"> Ansatt som overkonduktør. Arbeidsoppgavene bestod av salg, sikkerhet, kundeveiledning, service og håndtering av vanskelige kundesituasjoner.
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">1996-2006</div>
    <div className="timePlaceTwo">Sem</div>
    <div className="jobName">Sem Hårfix</div>
    <div className="jobInfo"> Ansatt som assistent. Arbeidsoppgaver var kundebehandling og salg av produkter. Laget også reklamemateriell.
    </div>
    <div className="program-container">
    <button className="programButton">Indesign</button>
    <button className="programButton">Photoshop</button>
    <button className="programButton">Illustrator</button>
    </div>
    </div>

    <div className="job">
    <div className="timePlaceOne">2005-2007</div>
    <div className="timePlaceTwo">Nøtterøy</div>
    <div className="jobName">Gro Industrier (Findus)</div>
    <div className="jobInfo"> Ansatt som operatør (Vikariat). Arbeidet med grønnsaker ved synebånd, hvor vi renset ut dårlig varer.
    </div>
    </div>

    <section id="summerjobkexperienceID" className="summerjob">
    <h1 className="nameTitle-summerjob">
    Sommer-og ekstrajobber ved siden av skolegang
    </h1>

    <div className="summerJob">
    <div className="timePlaceOneSummerjob">2004</div>
    <div className="summerjob-wrapper-text">
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">ISS, Proffice</div>
    <div className="jobInfoSummerjob">Renhold</div>
    </div>
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Gilde</div>
    <div className="jobInfoSummerjob">Pakking og prising.</div>
    </div>
    </div>
    </div>

    <div className="summerJob">
    <div className="timePlaceOneSummerjob">2003</div>
    <div className="summerjob-wrapper-text">
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Adecco</div>
    <div className="jobInfoSummerjob">Renhold</div>
    </div>
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Gilde</div>
    <div className="jobInfoSummerjob">Pakking og prising.</div>
    </div>
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Quality</div>
    <div className="jobInfoSummerjob">Stuepike.</div>
    </div>
    </div>

    <div className="summerJob">
    <div className="timePlaceOneSummerjob">2003</div>
    <div className="summerjob-wrapper-text">
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Adecco</div>
    <div className="jobInfoSummerjob">Renhold</div>
    </div>
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Gilde</div>
    <div className="jobInfoSummerjob">Pakking og prising.</div>
    </div>
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Quality</div>
    <div className="jobInfoSummerjob">Stuepike.</div>
    </div>
    </div>

    <div className="summerJob">
    <div className="timePlaceOneSummerjob">2001-2002</div>
    <div className="summerjob-wrapper-text">
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Adecco, NSB</div>
    <div className="jobInfoSummerjob">Renhold</div>
    </div>
    </div>
    </div>

    <div className="summerJob">
    <div className="timePlaceOneSummerjob">2000</div>
    <div className="summerjob-wrapper-text">
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Gilde</div>
    <div className="jobInfoSummerjob">Pakking og prising.</div>
    </div>
    </div>
    </div>

    <div className="summerJob">
    <div className="timePlaceOneSummerjob">1999</div>
    <div className="summerjob-wrapper-text">
    <div className="summerjob-wrapper-text-inside">
    <div className="jobNameSummerjob">Multi-Respons</div>
    <div className="jobInfoSummerjob">Telefonsalg.</div>
    </div>
    </div>
    </div>

    </div>
    </div>
    </section>

    <section id="educationID" className="education">
    <h1 className="nameTitle-education">UTDANNING</h1>

    <div className="myeducation">
    <div className="timePlaceOneEducation">2020</div>
    <div className="NameEducation">Universitetet i Sørøst-Norge</div>
    <div className="InfoEducation">
    Linje: Markedsføringsledelse. Innhold i studie: Behov, verdi, markedsorientering, strategi, segmentering, posisjonering, markedsinformasjon, SWOT, forbrukeratferd, produkt, produktutvikling, tjenester, pris, distribusjon, merkeledelse, og markedskommunikasjon. 
    </div>
    </div>

    <div className="myeducation">
    <div className="timePlaceOneEducation">2012</div>
    <div className="NameEducation">NSB Kompetansesenter</div>
    <div className="InfoEducation">
    Innhold i studie: Geografi, salg, kundesikkerhet, trafikksikkerhet, personlig sikkerhet. 
    </div>
    </div>

    <div className="myeducation">
    <div className="timePlaceOneEducation">2008-2009</div>
    <div className="NameEducation">IGM</div>
    <div className="InfoEducation">
    Linje: Webproduksjon. Arbeidsverktøy: Dremweaver. Innhold i studie: Historie i internetts oppbygning. Grunnleggende protokoller i bruk av internett. Opprette nettsteder ved bruk av HTML og XHTML. Webstandard og stilsett. Bilder og grafikk for internett og skjerm. Filstørrelse, fargeteori og filformater for internett. Informasjondesign med form og funksjon i et interaktivt medium oppbygning av nettsted.
    </div>
    <div className="program-container">
    <button className="programButton">HTML</button>
    <button className="programButton">CSS</button>
    <button className="programButton">Photoshop</button>
    </div>
    </div>

    <div className="myeducation">
    <div className="timePlaceOneEducation">2004-2005</div>
    <div className="NameEducation">Idefagskole</div>
    <div className="InfoEducation">
    Linje: Grafisk design. Innhold i studie: Skrift og typografi, layout og komposisjon, skissetegning, fargelære, idelære, sideombrekking, grids og modulsystemer, digital skissetegning og illustrasjon, innføring i trykkemetoder, billedbehandling. Innføring i digital fotografering og innscanning av illustrasjoner og foto. Utarbeidelse av logoer, adm. trykksaker, annonser, reklamemateriell, brosjyrer, presentasjon av tanker ideer visuelt og grunnleggende undervisning i programmene Adobe Photoshop, Illustrator og Indesign.
    </div>
    <div className="program-container">
    <button className="programButton">Indesign</button>
    <button className="programButton">Photoshop</button>
    <button className="programButton">Illustator</button>
    </div>
    </div>

    <div className="myeducation">
    <div className="timePlaceOneEducation">2002-2003</div>
    <div className="NameEducation">Nøtterøy videregående skole</div>
    <div className="InfoEducation">
    Linje: Almen påbygning.
    </div>
    </div>

    <div className="myeducation">
    <div className="timePlaceOneEducation">2001-2002</div>
    <div className="NameEducation">Gloppe videregående skole</div>
    <div className="InfoEducation">
    Linje: Reklame, illustasjon og design.
    </div>
    <div className="program-container">
    <button className="programButton">Photoshop</button>
    </div>
    </div>

    <div className="myeducation">
    <div className="timePlaceOneEducation">1999-2001</div>
    <div className="NameEducation">Teie videregående skole</div>
    <div className="InfoEducation">
    Linje: Tegne, form og farge. Spesialisering: Avansert tegning og maling. Kunst, akt og perspektiv.
    </div>
    </div>
    </section>

    <section id="coursekexperienceID" className="course">
    <h1 className="nameTitle-course">Kurs</h1>

    <div className="mycourse">
    <div className="timePlaceOnecourse">d.d</div>
    <div className="Namecourse">Grunnleggende programmering og koding</div>
    <div className="Infocourse">
    Podium. I dette kurset lærer vi grunnleggende kunnskaper i HTML / CSS og Javascript. Som skal brukes til statiske nettsider og apper. Designe nettsider med hjelp av Figma.
    </div>
    <div className="program-container">
    <button className="programButton">HTML</button>
    <button className="programButton">CSS</button>
    <button className="programButton">Javascrip</button>
    <button className="programButton">React</button>
    <button className="programButton">Figma</button>
    <button className="programButton">Discord</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">12.04.2019</div>
    <div className="Namecourse">Marketing with video</div>
    <div className="Infocourse">
    Linkedin Learning. Dette kurset gikk ut på hvordan video kan hjelpe med å øke merkevarenes bevissthet og salg ved å dele spennende historier som resonnere med publikum.
    </div>
    <div className="program-container">
    <button className="programButton">Linkedin</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">04.03.2019</div>
    <div className="Namecourse">Marketing on Facebook</div>
    <div className="Infocourse">
    Linkedin Learning. Kurset gikk ut på hvordan man markedsfører virksomheten og engasjerer seg med følgerne ved å utnytte kommentarer, lage avstemninger og administrere kampanjer.
    </div>
    <div className="program-container">
    <button className="programButton">Linkedin</button>
    <button className="programButton">Facebook</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">07.02.2019</div>
    <div className="Namecourse">Building Transparency in Photoshop</div>
    <div className="Infocourse">
    Linkedin Learning. Triks for å gi design og illustrasjoner mer dybde, volum og gjennomsiktighet.
    </div>
    <div className="program-container">
    <button className="programButton">Linkedin</button>
    <button className="programButton">Photoshop</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">08.02.2019</div>
    <div className="Namecourse">Marketing on Instagram</div>
    <div className="Infocourse">
    Linkedin Learning. Markedsføring av produkt eller tjeneste på Instagram. Kurs om viktige funksjoner og digitale markedsføringsstrategier som kan hjelpe med å øke salget og tilstedeværelsen online ved å bruke denne populære sosiale plattformen.
    </div>
    <div className="program-container">
    <button className="programButton">Linkedin</button>
    <button className="programButton">Instagram</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">07.02.2019</div>
    <div className="Namecourse">Managing Brand Reputation</div>
    <div className="Infocourse">
    Linkedin Learning. Gikk ut på hvordan man overvåker og forbedrer omdømmet til bedriftens merkevare. Følge opp kundens vurderinger og gi tilbakemeldinger.
    </div>
    <div className="program-container">
    <button className="programButton">Linkedin</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">16.02.2019</div>
    <div className="Namecourse">Photoshop Masking and Compositing: Hair</div>
    <div className="Infocourse">
    Linkedin Learning. Kurset dekket hvordan man maskerte ut hår, maler i detalj, blandet hår, flette kanaler og matche lyskilder. Med spesielle teknikker for både mørkt og lyst hår.
    </div>
    <div className="program-container">
    <button className="programButton">Linkedin</button>
    <button className="programButton">Photoshop</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">16.01.2019</div>
    <div className="Namecourse">Photoshop Retouching: Beauty Portrains</div>
    <div className="Infocourse">
    Linkedin Learning. Kurset gikk ut på å skjerpe deler av et portrett bilde, med forbedring av øynene og leppene. Ved å trekke oppmerksomhet mot dem, med å bruke masker for å endre fargen på klær og mer.
    </div>
    <div className="program-container">
    <button className="programButton">Linkedin</button>
    <button className="programButton">Photoshop</button>
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">01.10.2010</div>
    <div className="Namecourse">Papirskolen</div>
    <div className="Infocourse">
    Papirets historie og kunnskap om forskjellige papirtyper.
    </div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">18.09.2007</div>
    <div className="Namecourse">Høyskolen i Vestfold</div>
    <div className="Infocourse">Fotografering.</div>
    </div>

    <div className="mycourse">
    <div className="timePlaceOnecourse">01.03.2007</div>
    <div className="Namecourse">Kandata</div>
    <div className="Infocourse"> Webkurs </div>
    <div className="program-container">
    <button className="programButton">HTML</button>

    </div>
    </div>
    
    </section>


    </section>
    </div>
    </div>
    </section>
  );
};

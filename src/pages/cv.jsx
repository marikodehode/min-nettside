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

          {/* Begge åpnes i nytt vindu */}
<div className="cv-links">
  <a
    className="cv-link-row"
    href="/cv/cv.pdf"
    download="Mari-Karlsen-Grafisk-CV.pdf"
    aria-label="Last ned Grafisk CV (PDF)"
    title="Last ned Grafisk CV (PDF)"
  >
    {/* Ikon først */}
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="cv-link-label">Grafisk CV</span>
  </a>

  <a
    className="cv-link-row"
    href="/cv/master-cv.pdf"
    download="Mari-Karlsen-Master-CV.pdf"
    aria-label="Last ned Master CV (PDF)"
    title="Last ned Master CV (PDF)"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="cv-link-label">Master CV</span>
  </a>

  <a
    className="cv-link-row"
    href="/attest/sluttsattester.pdf"
    download="Mari-Karlsen-Attester.pdf"
    aria-label="Last ned Attester (PDF)"
    title="Last ned Attester (PDF)"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="cv-link-label">Attester</span>
  </a>
</div>

        </div>









        <div className="workexperience">
          <section id="workexperienceID" className="jobs">
            <h1 className="nameTitle-cv">CURRICULUM VITAE</h1>
            <p className="textfill-cv">ARBEIDSERFARING</p>
                        
              <div className="job">
              <div className="timePlaceOne">2024-2025 Horten</div>
              <div className="jobName">Universitetet i Sør-Øst Norge</div>
              <div className="jobInfo">
                Ansatt som senior konsulent. Arbeidsoppgaver: Oppsett, publisering og vedlikehold av nettsider, inkludert oppdatering av innhold, struktur og design. Deltar i prosjekter knyttet til utvikling og forbedring av nettløsninger, med fokus på brukeropplevelse, universell utforming og teknisk kvalitet. <br />
                Program: Office, CorePublish, Figma, Panopto, Wordpress og Divi Builder (Vikariat). 
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2021-2022 Åsgårdstrand</div>
              <div className="jobName">Motivation Boxes AS</div>
              <div className="jobInfo">
                Ansatt som grafisk designer. Arbeidsoppgaver: Design og utforme
                digitale annonser, logo, flyer, brosjyrer, nyhetsbrev, brosjyre,
                journal og oppsett av nettsider. Hjalp til med kundeservice,
                hvor jeg svarte alle e-post, pluss mye mer. I denne stillingen
                bistod jeg også i et selskap som het Medikomp. Her drev jeg
                nettbutikken, bestillinger, kontroll på lager og
                kundeservice.
                Program: Office, Excel, Power Point, Word, WooCommers, Wordpress, MailChimp, Kabjabi, Cnava, Indesign, Photoshop, Illusrator, Klarna, Instagram, Facebook og Linkedin (På grunn av bedriftens kritiske økonomiske
                situasjon, så forsvant dessverre min stilling).
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2019 Moss</div>
              <div className="jobName">New Nordic AS</div>
              <div className="jobInfo">
                Ansatt som grafisk designer. Arbeidsoppgavene bestod av å
                utforme og tilpasse annonser, butikkmateriell, vedlikehold av
                sosiale medier og nyhetsbrev. Har sittet en del med å oversette
                tekster fra engelsk og dansk til norsk. Program: Office, MailChimp, Indesign, Photoshop og Illustrator (Største kunde gikk
                konkurs, bedriften fikk store tap, og ente med å måtte ta
                nedbemanning i bedriften).
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2019 Tønsberg</div>
              <div className="jobName">Maratim Hotell</div>
              <div className="jobInfo">
                Ansatt som resepsjonist/markedskoordinator. Arbeidsoppgavene
                bestod av booking, svare telefon og e-post fra kunder. Ta imot
                gjester og hjelpe til med frokosten. Oppsett av sosiale medier,
                arbeide med logo og reklamemateriell som skulle gå på Facebook.
                Bistod med å administrerende arbeid som å gå igjennom
                dokumenter, rettskriving utgående eposter for min sjef og bistå
                på telefonsamtaler med leverandører, samt flere ulike saker som
                oppstod. Program: Office, Instagram og Facebook (Byttet arbeidsplass da jeg ble tilbudt stilling hos
                New Nordic).
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2018 Tønsberg</div>
              <div className="jobName">Amedia Annonseproduksjon</div>
              <div className="jobInfo">
                Ansatt som grafisk designer (Vikariat). Arbeidsoppgavene består
                i produksjon av annonser og reklamemateriell for Amedia sine
                konsern aviser. Oppgavene spenner fra mindre enkelt annonser til
                større produksjoner, samlesider og innstikk, og medfører stor
                grad av kundekontakt, både med selger/medierådgiver i
                mediehusene og direkte med annonsør. Program: Indesign, Photoshop og Illustrator.
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2018 Torp</div>
              <div className="jobName">CoreTrek (Toptemp)</div>
              <div className="jobInfo">
                Ansatt som markedskonsulent (Vikariat). Arbeidsoppgavene bestod
                i å ha kontakt med potensielle eller eksisterende kunder når det
                kom til deres behov for webløsninger, ved å følge opp invitasjon
                til Coretrek sine seminarer. Program: Office og Excel.
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2016-2017 Nydalen</div>
              <div className="jobName">Norli Libris AS</div>
              <div className="jobInfo">
                Ansatt som grafisk designer / markedskonsulent (Vikariat).
                Arbeidsoppgavene bestod i produksjon av kampanjemateriell for
                Norli og Libris. Dette bestod av annonser, plakater, nyhetsbrev,
                bannere og mye mer. Vi jobber tett med butikkene i hele Norge. I
                tillegg til stillingen satt jeg også i resepsjonen. Program: Indesign, Photoshop, Illustrator og Facebook.
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2013-1015 Tønsberg</div>
              <div className="jobName">Amedia Annonseproduksjon</div>
              <div className="jobInfo">
                Ansatt som grafisk designer (Vikariat). Arbeidsoppgavene består
                i produksjon av annonser og reklamemateriell for Amedia sine
                konsern aviser. Oppgavene spenner fra mindre enkelt annonser til
                større produksjoner, samlesider og innstikk, og medfører stor
                grad av kundekontakt, både med selger/medierådgiver i
                mediehusene og direkte med annonsør. Program: Indesign, Photoshop og Illustrator.
              </div>
            </div>

            <div className="job">
              <div className="timePlaceOne">2012-2013 Oslo</div>
              <div className="jobName">NSB</div>
              <div className="jobInfo">
                {" "}
                Ansatt som overkonduktør med hovedansvar for salg, sikkerhet og kundeservice. Arbeidet bestod i billettsalg, kontroll og veiledning av passasjerer, samt håndtering av ulike kundesituasjoner på en trygg og profesjonell måte. Stillingen krevde høy grad av serviceinnstilling, kommunikasjonsevne og evne til å bevare roen i utfordrende situasjoner.
              </div>
            </div>

               <div className="job">
              <div className="timePlaceOne">1996-2006 Sem</div>
              <div className="jobName">Sem Hårfix</div>
              <div className="jobInfo">
                {" "}
                Arbeidet som assistent med fokus på kundebehandling, salg og markedsføring. Laget reklamemateriell og grafiske elementer. Stillingen krevde både kreative og serviceorienterte ferdigheter. Program: Indesign, Photoshop og Illustrator.
              </div>
            </div>

                        <div className="job">
              <div className="timePlaceOne">2005-2007 Nøtterøy</div>
              <div className="jobName">Gro Industrier (Findus)</div>
              <div className="jobInfo">
                {" "}
                Ansatt som operatør (vikariat) i produksjon av grønnsaker. Arbeidet foregikk ved samlebånd og bestod i sortering, kvalitetskontroll og utskilling av varer som ikke holdt standard. Stillingen krevde nøyaktighet, samarbeidsevne og effektivt arbeidstempo.
              </div>

            <div className="job">
              <div className="timePlaceOne"></div>
              <div className="jobName"></div>
              <div className="jobInfo">
                {" "}
              </div>
              <div className="program-container">
              </div>
            </div>


            </div>

            <section id="summerjobkexperienceID" className="summerjob">
            </section>

            <section id="educationID" className="education">
              <h1 className="nameTitle-education">UTDANNING</h1>

              <div className="myeducation">
                <div className="timePlaceOneEducation">2020</div>
                <div className="NameEducation">
                  Universitetet i Sørøst-Norge
                </div>
                <div className="InfoEducation">
                  Linje: Markedsføringsledelse. Innhold i studie: Behov, verdi,
                  markedsorientering, strategi, segmentering, posisjonering,
                  markedsinformasjon, SWOT, forbrukeratferd, produkt,
                  produktutvikling, tjenester, pris, distribusjon, merkeledelse,
                  og markedskommunikasjon.
                </div>
              </div>

              <div className="myeducation">
                <div className="timePlaceOneEducation">2012</div>
                <div className="NameEducation">NSB Kompetansesenter</div>
                <div className="InfoEducation">
                  Utdanningen ga en bred forståelse av geografi, salg og sikkerhet, inkludert kundesikkerhet, trafikksikkerhet og personlig sikkerhet – kompetanse som er overførbar til både kundeorienterte og operative yrker.
                </div>
              </div>

              <div className="myeducation">
                <div className="timePlaceOneEducation">2008-2009</div>
                <div className="NameEducation">IGM</div>
                <div className="InfoEducation">
                  Linje: Webproduksjon. Arbeidsverktøy: Dremweaver. Innhold i
                  studie: Historie i internetts oppbygning. Grunnleggende
                  protokoller i bruk av internett. Opprette nettsteder ved bruk
                  av HTML og XHTML. Webstandard og stilsett. Bilder og grafikk
                  for internett og skjerm. Filstørrelse, fargeteori og
                  filformater for internett. Informasjondesign med form og
                  funksjon i et interaktivt medium oppbygning av nettsted. Program: HTML, CSS og Photoshop.
                </div>
              </div>

              <div className="myeducation">
                <div className="timePlaceOneEducation">2004-2005</div>
                <div className="NameEducation">Idefagskole</div>
                <div className="InfoEducation">
                  Linje: Grafisk design. Innhold i studie: Skrift og typografi,
                  layout og komposisjon, skissetegning, fargelære, idelære,
                  sideombrekking, grids og modulsystemer, digital skissetegning
                  og illustrasjon, innføring i trykkemetoder, billedbehandling.
                  Innføring i digital fotografering og innscanning av
                  illustrasjoner og foto. Utarbeidelse av logoer, adm.
                  trykksaker, annonser, reklamemateriell, brosjyrer,
                  presentasjon av tanker ideer visuelt og grunnleggende
                  undervisning i programmene Adobe Photoshop, Illustrator og
                  Indesign.
                </div>
              </div>

              <div className="myeducation">
                <div className="timePlaceOneEducation">2002-2003</div>
                <div className="NameEducation">Nøtterøy videregående skole</div>
                <div className="InfoEducation">Linje: Almen påbygning. Almen påbygning med fag som norsk, engelsk, matematikk, naturfag, historie og samfunnsfag. Utdanningen la vekt på kommunikasjon, samarbeid, refleksjon og selvstendig arbeid, og ga generell studiekompetanse som grunnlag for videre utdanning</div>
              </div>

              <div className="myeducation">
                <div className="timePlaceOneEducation">2001-2002</div>
                <div className="NameEducation">Gloppe videregående skole</div>
                <div className="InfoEducation">
                  Linje: Reklame, illustasjon og design. Studiet omfattet arbeid med illustrasjon, grafisk design og foto. Opplæringen inkluderte både digital bildebehandling og praktisk erfaring med fremkalling av fotografier i mørkerom. Utdanningen ga solid forståelse for visuell kommunikasjon, kreativ prosess og designteknikker.
                </div>
              </div>

              <div className="myeducation">
                <div className="timePlaceOneEducation">1999-2001</div>
                <div className="NameEducation">Teie videregående skole</div>
                <div className="InfoEducation">
                  Linje: Tegne, form og farge. Utdanningen fokuserte på kreativ utvikling og praktiske ferdigheter innen avansert tegning, maling, komposisjon og formforståelse. Inkluderte arbeid med akttegning, keramikk og kunsthistorie, samt bruk av ulike teknikker og materialer.
                </div>
              </div>
            </section>

            <section id="courseexperienceID" className="courses">
              <h1 className="nameTitle-course">Kurs</h1>

              <div className="mycourse">
                <div className="timePlaceOnecourse">10.11.2023</div>
                <div className="Namecourse">
                  Grunnleggende programmering og koding
                </div>
                <div className="Infocourse">
                  Podium. I dette kurset lærer vi grunnleggende kunnskaper i
                  HTML / CSS og Javascript. Som skal brukes til statiske
                  nettsider og apper. Designe nettsider med hjelp av Figma. Program: HTML, CSS, Javascrip, React, Figma, Discord.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">12.04.2019</div>
                <div className="Namecourse">Marketing with video</div>
                <div className="Infocourse">
                  Linkedin Learning. Dette kurset gikk ut på hvordan video kan
                  hjelpe med å øke merkevarenes bevissthet og salg ved å dele
                  spennende historier som resonnere med publikum.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">04.03.2019</div>
                <div className="Namecourse">Marketing on Facebook</div>
                <div className="Infocourse">
                  Linkedin Learning. Kurset gikk ut på hvordan man markedsfører
                  virksomheten og engasjerer seg med følgerne ved å utnytte
                  kommentarer, lage avstemninger og administrere kampanjer.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">07.02.2019</div>
                <div className="Namecourse">
                  Building Transparency in Photoshop
                </div>
                <div className="Infocourse">
                  Linkedin Learning. Lærte teknikker for å manipulere gjennomsiktighet og lys i digitale bilder, samt metoder for å skape dybde, volum og mer realistiske visuelle uttrykk i design og illustrasjoner.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">08.02.2019</div>
                <div className="Namecourse">Marketing on Instagram</div>
                <div className="Infocourse">
                  Linkedin Learning. Markedsføring av produkt eller tjeneste på
                  Instagram. Kurs om viktige funksjoner og digitale
                  markedsføringsstrategier som kan hjelpe med å øke salget og
                  tilstedeværelsen online ved å bruke denne populære sosiale
                  plattformen.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">07.02.2019</div>
                <div className="Namecourse">Managing Brand Reputation</div>
                <div className="Infocourse">
                  Linkedin Learning. Gikk ut på hvordan man overvåker og
                  forbedrer omdømmet til bedriftens merkevare. Følge opp kundens
                  vurderinger og gi tilbakemeldinger.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">16.02.2019</div>
                <div className="Namecourse">
                  Photoshop Masking and Compositing: Hair
                </div>
                <div className="Infocourse">
                  Linkedin Learning. Kurset dekket hvordan man maskerte ut hår,
                  maler i detalj, blandet hår, flette kanaler og matche
                  lyskilder. Med spesielle teknikker for både mørkt og lyst hår.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">16.01.2019</div>
                <div className="Namecourse">
                  Photoshop Retouching: Beauty Portrains
                </div>
                <div className="Infocourse">
                  Linkedin Learning. Kurset gikk ut på å skjerpe deler av et
                  portrett bilde, med forbedring av øynene og leppene. Ved å
                  trekke oppmerksomhet mot dem, med å bruke masker for å endre
                  fargen på klær og mer.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">01.10.2010</div>
                <div className="Namecourse">Papirskolen</div>
                <div className="Infocourse">
                  Fullført kurs hos Papirskolen. Kurset ga kunnskap om papirets historie, produksjon og ulike papirtyper, inkludert hvordan egenskapene påvirker bruk i design, kunst og trykk.
                </div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">18.09.2007</div>
                <div className="Namecourse">Høyskolen i Vestfold</div>
                <div className="Infocourse">Fotokurs med speilreflekskamera med fokus på eksponering, lyssetting og komposisjon. Kurset inkluderte praktisk fotografering under utflukt i skogsområder, hvor vi lærte å anvende teknikkene i naturlige omgivelser.</div>
              </div>

              <div className="mycourse">
                <div className="timePlaceOnecourse">01.03.2007</div>
                <div className="Namecourse">Kandata</div>
                <div className="Infocourse"> Webkurs </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

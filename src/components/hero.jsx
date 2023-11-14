import {GrLinkedinOption} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

export const Hero = () => {
    return (
      <section className="top-body-container">
      <div className="image-overlay">
        <article className="textbox">
          <h1 className="nameTitle">MARI KARLSEN</h1>
            <p className='textfill-hero'>Grafisk designer</p>
            <p className='textfill-herotwo'>& Frontend</p>
        </article>

        <div className="icon-overlay">
        <div className='iconboxheroOne'>
        <a href='https://www.linkedin.com/in/mari-frøysnes-karlsen-716156113/' target='_blank' rel='noopener noreferrer'><GrLinkedinOption className='iconsheroOne' /></a></div>

        <div className='iconboxhero'>
          <a href='https://github.com/marikodehode?tab=repositories' target='_blank' rel='noopener noreferrer'><BsGithub className='iconshero'/></a></div>
        </div>
      </div>
      </section>     
    )
}
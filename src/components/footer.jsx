import "./css/footer.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer id="footer-section" className="footer-container">
        <div className="iconbox">
          <a href="tel:98872854"><FaPhoneVolume className="icons" /></a>
        </div>

        <div className="iconbox">
          <a href="mailto:mari_karlsen@yahoo.no"><TfiEmail className="icons" />
          </a>
        </div>

        <div className="iconbox">
          <a href="https://www.facebook.com/profile.php?id=531011001"
            target="_blank"
            rel="noopener noreferrer"><BsFacebook className="icons" />
          </a>
        </div>

        <div className="iconbox">
          <a href="https://www.instagram.com/marifroysneskarlsen/?utm_source=qr"
            target="_blank" rel="noopener noreferrer"><BsInstagram className="icons" />
          </a>
        </div>

        <div className="iconbox">
          <a href="https://www.linkedin.com/in/mari-frøysnes-karlsen-716156113/"
            target="_blank" rel="noopener noreferrer">
            <GrLinkedinOption className="icons" />
          </a>
        </div>

        <div className="iconbox">
          <a href='https://github.com/marikodehode?tab=repositories' target='_blank' rel='noopener noreferrer'><BsGithub className="icons" /></a>
        </div>
      </footer>
    </>
  );
};

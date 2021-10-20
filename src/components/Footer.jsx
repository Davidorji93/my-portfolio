import React from "react";
import FooterLogo from "../assets/images/logo2.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <img className="mb-3 mb-lg-2" src={FooterLogo} alt="" />
          </div>

          <div className="col-lg">
            <div className="mb-3 mb-lg-0">
              <a className="footer-mail" href="mailto:davidorji93@gmail.com">
                davidorji93@gmail.com
              </a>npm start
          
            </div>
          </div>

          <div className="col-lg">
            <p className="footer-mail mb-3 mb-lg-0">+234 7059260377</p>
          </div>

          <div className="col-lg ">
            <div className="mb-3 mb-lg-0">
              <a href="https://github.com/Davidorji93">
                <GitHubIcon className="footer-social" htmlColor="white" />
              </a>
              <a href="https://www.instagram.com/orji_david93/">
                <InstagramIcon className="footer-social" htmlColor="white" />
              </a>
              <a href="hhtps://https://twitter.com/Davidorji93Orji?s=08">
                <TwitterIcon className="footer-social" htmlColor="white" />
              </a>
              <a href="https://www.facebook.com/orjidavid.edwin/">
                <FacebookIcon className="footer-social" htmlColor="white" />
              </a>

              <a href="www.linkedin.com/in/david-orji-159344117/">
                <LinkedInIcon className="footer-social" htmlColor="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <p className="text-center text-white m-0">
          Template designed and developed by{" "}
          <a href="https://www.facebook.com/orjidavid.edwin/">David</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

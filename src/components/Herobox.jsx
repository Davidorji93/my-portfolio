import React from "react";
import HeroBg from "../assets/images/hero-image.jpg";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

const Herobox = () => {
  return (
    <div className="hero-box">
      <div className="row p-0 m-0 align-items-center">
        <div className="col p-0">
          <div
            style={{ backgroundImage: `url(${HeroBg})` }}
            className="hero-pic-wrapper"
          >
            <div className="hero-pic-overlay">
              <div className="container">
                {/* mobile hero details */}
                <div className="d-md-none d-sm-block text-end text-capitalize text-white">
                  <h3>
                    Hello !<br />i am a front end developer
                  </h3>

                  <h2 className="mt-3 mb-0">my name is</h2>
                  <h1 className="mb-0">David Orji</h1>

                  <div className="mt-5">
                    <a
                      target="_blank"
                      className="pri-alt-btn"
                      href="https://drive.google.com/file/d/1jY7b9RwWCtu7ugf9LAUPYivmMJ_K9fm6/view?usp=sharing"
                    >
                      <PlayForWorkIcon className="animate__animated animate__slideInDown" />
                      download my CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col d-none d-md-block">
          <div className="text-end text-capitalize desktop-hero-details">
            <div>
              <h3>
                Hello !<br />i am a front end developer
              </h3>

              <h2 className="mt-3 mb-0">my name is</h2>
              <h1 className="mb-0">David Orji</h1>

              <div className="mt-5">
                <a
                  className="pri-btn"
                  target="_blank"
                  href="https://drive.google.com/file/d/1jY7b9RwWCtu7ugf9LAUPYivmMJ_K9fm6/view?usp=sharing"
                >
                  <PlayForWorkIcon className="animate__animated animate__slideInDown" />
                  download my CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobox;

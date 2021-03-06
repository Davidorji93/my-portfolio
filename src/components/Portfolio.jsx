import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// portfolio links
import Akpego from "../assets/images/akpego.png";
import Dungada from "../assets/images/dungada.png";
import Sterling from "../assets/images/sterling.png";


class Portfolio extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 1,
      },

      1366: {
        items: 1,
      },
    },
  };
  render() {
    return (
      <section id="works" className="portfolio-section">
        <div className="container">
          <h2 className="text-center mb-5">Some Of My Works</h2>

          <div>
            <OwlCarousel
              className="owl-theme mt-3"
              loop
              autoplay
              margin={2}
              nav={true}
              // center={true}
              dots={true}
              responsive={this.state.responsive}
            >
              <div className="item">
                <div
                  style={{ backgroundImage: `url(${Akpego})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-btn"
                      href="https://dwallit.herokuapp.com"
                      target="_blank"
                    >
                      view site
                    </a>
                  </div>
                </div>
                <h4 className="text-center">Akpego(FINTECH)</h4>
              </div>

              <div className="item">
                <div
                  style={{ backgroundImage: `url(${Dungada})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-btn"
                      href="https://dungada.com"
                      target="_blank"
                    >
                      view site
                    </a>
                  </div>
                </div>
                <h4 className="text-center">Dungada Website</h4>
              </div>

              <div className="item">
                <div
                  style={{ backgroundImage: `url(${Sterling})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-alt-btn"
                      href="https://github.com/Temitope0610/Sterlingbank-clone"
                      target="_blank"
                    >
                      view code
                    </a>
                  </div>
                </div>
                <h4 className="text-center">Sterling bank Clone</h4>
              </div>

              <div className="item">
               
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

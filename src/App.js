import { Component } from "react";

import "./App.css";
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container-fluid">
          <div id="wrapper">
            <div className="col-md-6 mx-auto">
              <h1 className="text-center white">Our Testimonials</h1>
              <p className="text-center white">
                Take a look below to learn what our clients are saying about us:
              </p>
              <div
                id="carouselExample"
                className="carousel carousel-light slide"
                data-bs-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="2"
                  ></li>
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="3"
                  ></li>

                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="4"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <div className="img-box">
                      <img src="/images/testi_1.jpg" alt="" />
                    </div>
                    <p className="testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam eu sem tempor, varius quam at, luctus dui. Mauris
                      magna metus, dapibus nec turpis vel, semper malesuada
                      ante. Idac bibendum scelerisque non non purus. Suspendisse
                      varius nibh non aliquet.
                    </p>
                    <p className="overview">
                      <b>Erwin Agpasa</b>, Software Developer
                    </p>
                  </div>

                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="img-box">
                      <img src="/images/testi_2.jpg" alt="" />
                    </div>
                    <p className="testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam eu sem tempor, varius quam at, luctus dui. Mauris
                      magna metus, dapibus nec turpis vel, semper malesuada
                      ante. Idac bibendum scelerisque non non purus. Suspendisse
                      varius nibh non aliquet.
                    </p>
                    <p className="overview">
                      <b>Aifa</b>, Architech
                    </p>
                  </div>

                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="/images/testi_3.jpg" alt="" />
                    </div>
                    <p className="testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam eu sem tempor, varius quam at, luctus dui. Mauris
                      magna metus, dapibus nec turpis vel, semper malesuada
                      ante. Idac bibendum scelerisque non non purus. Suspendisse
                      varius nibh non aliquet.
                    </p>
                    <p className="overview">
                      <b>Angela</b>, Game Developer
                    </p>
                  </div>

                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="/images/testi_4.jpg" alt="" />
                    </div>
                    <p className="testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam eu sem tempor, varius quam at, luctus dui. Mauris
                      magna metus, dapibus nec turpis vel, semper malesuada
                      ante. Idac bibendum scelerisque non non purus. Suspendisse
                      varius nibh non aliquet.
                    </p>
                    <p className="overview">
                      <b>Alexandra</b>, Media Analyst
                    </p>
                  </div>

                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="/images/testi_4.jpg" alt="" />
                    </div>
                    <p className="testimonial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam eu sem tempor, varius quam at, luctus dui. Mauris
                      magna metus, dapibus nec turpis vel, semper malesuada
                      ante. Idac bibendum scelerisque non non purus. Suspendisse
                      varius nibh non aliquet.
                    </p>
                    <p className="overview">
                      <b>Amber</b>, Game Tester
                    </p>
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#carouselExample"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExample"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

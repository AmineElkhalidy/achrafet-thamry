import React from "react";
import Footer from "./Footer";
import AshrafImage from "../../src/assets/images/ashraf.jpg";
import ProductOne from "../../src/assets/products/product-00.jpeg";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <>
      <section className="services section container">
        <span className="section__subtitle">Offering</span>
        <h2 className="section__title">Our amazing services</h2>

        <div className="services__container grid">
          <div className="services__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="services__img"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z" />
            </svg>
            <h3 className="services__title">Excellent Quality</h3>
            <p className="services__description">
              We offer the best products in terms of quality
            </p>
          </div>

          <div className="services__content">
            <svg
              className="services__img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
            </svg>
            <h3 className="services__title">Respect The Deadlines</h3>
            <p className="services__description">
              We offer the best products in terms of quality
            </p>
          </div>

          <div className="services__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="services__img"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001zM7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
            </svg>
            <h3 className="services__title">Delivery</h3>
            <p className="services__description">
              We offer the best products in terms of quality
            </p>
          </div>
        </div>
      </section>

      <section className="contact section container">
        <span className="section__subtitle">Let's talk</span>
        <h2 className="section__title">Contact us</h2>
        <div className="contact__container grid">
          <div className="contact__data">
            <p className="contact__description">
              If you want to buy one of the products, or you want to have a
              specific products that matches your needs, do not hesitate to
              contact us.
            </p>
          </div>

          <div className="contact__button">
            <Link to="/contactUs" className="button">
              Contact us now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomeSection;

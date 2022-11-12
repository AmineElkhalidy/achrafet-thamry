import React from "react";

// Styled components
import styled from "styled-components";

// Helmet
import { Helmet } from "react-helmet";

// Form spree
import { useForm, ValidationError } from "@formspree/react";

const ContactUsSection = () => {
  // Form state
  const [state, handleSubmit] = useForm("xnqwdjvw");

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="If you liked our products and you want to purchase them, do not hesitate to use the resource listed below or the form..."
        />

        <title>Contact Us</title>
      </Helmet>

      <Container>
        <div className="container">
          <div className="content">
            <div className="left__side">
              <div className="address details">
                <i className="ri-map-pin-fill contactUs__icon"></i>
                <h4 className="topic">Address</h4>
                <a
                  href="https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A3%D9%88%D9%84%D8%A7%D8%AF+%D8%AE%D8%A7%D9%84%D8%AF+%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9,+P2135,+Sidi+Aissa+Ben+Slimane%E2%80%AD/@31.9111776,-7.2182086,15.38z/data=!4m13!1m7!3m6!1s0xda51b973f7dcca5:0x3e0561f8d60b1205!2sSidi+Aissa+Ben+Slimane!3b1!8m2!3d31.9132874!4d-7.2113605!3m4!1s0xda51bac8030e93b:0x77b052860b3ce45a!8m2!3d31.9183941!4d-7.2195303"
                  className="text__one"
                >
                  Sidi Aissa Ben Slimane - Elkelaa Des Sraghna
                </a>
                {/* <div className="text__two"></div> */}
              </div>
              <div className="phone details">
                <i className="ri-phone-fill contactUs__icon"></i>
                <h4 className="topic">Phone Number</h4>
                <a href="tel:+212670281848" className="text__one">
                  +212670281848
                </a>
              </div>

              <div className="phone details">
                <i className="ri-at-line contactUs__icon"></i>
                <h4 className="topic">Email Address</h4>
                <a href="mailto:etthamryachraf@gmail.com" className="text__one">
                  etthamryachraf@gmail.com
                </a>
              </div>
            </div>

            <div className="right__side">
              <div className="topic__text">Get in touch with us</div>
              <p>
                If you liked one of the products that we offer to you, contact
                us and we will handle all of the rest.
              </p>

              <form action="https://formspree.io/f/xnqwdjvw" method="POST">
                <div className="input__box">
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="name"
                    name="name"
                    required
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="input__box">
                  <input
                    type="phone-number"
                    placeholder="Your Whatsapp Number"
                    id="phone number"
                    name="phone number"
                    required
                  />

                  <ValidationError
                    prefix="Phone Number"
                    field="phone number"
                    errors={state.errors}
                  />
                </div>

                <div className="input__box">
                  <input
                    type="text"
                    placeholder="Your Email"
                    name="country"
                    id="country"
                    required
                  />

                  <ValidationError
                    prefix="Country"
                    field="country"
                    errors={state.errors}
                  />
                </div>

                <div className="input__box message__box">
                  <textarea
                    placeholder="Your Message"
                    id="message"
                    name="message"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <div className="button__container">
                  <button className="btn" disabled={state.submitting}>
                    Send <i className="ri-send-plane-fill send__icon"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUsSection;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-blue);
  padding-bottom: 4rem;
  border-bottom: 1px solid white;

  @media screen and (min-width: 767px) {
    & {
      padding-top: 4rem;
    }
  }

  .container {
    width: 80%;
    background-color: #061225;
    border-radius: 10px;
    padding: 30px 60px 40px 40px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left__side {
    width: 25%;
    height: 100%;
    position: relative;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .left__side::before {
    content: "";
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 2px;
    background-color: var(--white-color);
  }

  .details {
    margin: 14px;
    text-align: center;
  }

  .contactUs__icon {
    font-size: 1.5rem;
    color: var(--dark-red);
    margin-bottom: 10px;
  }

  .topic {
    font-size: 1.2rem;
    color: var(--white-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-5);
  }

  .text__one,
  .text__two {
    font-size: 15px;
    color: #f0f1f8;
  }

  .right__side {
    width: 75%;
    margin-left: 75px;
  }

  .topic__text {
    font-size: 1.75rem;
    color: var(--dark-red);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-5);
  }

  .right__side p {
    color: #f0f1f8;
    margin-bottom: var(--mb-1-5);
  }

  .input__box {
    height: 50px;
    width: 100%;
    margin: 12px 0;
  }

  .input__box input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 0 15px;
    color: var(--dark-blue);
  }

  .message__box {
    min-height: 125px;
  }

  .input__box textarea {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 15px;
    resize: none;
    color: var(--dark-blue);
  }

  .button__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .btn {
    font-size: 1.1rem;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-red);
    color: var(--white-color);
    column-gap: 0.5rem;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .btn:hover {
    background-color: var(--white-color);
    color: var(--dark-red);
  }

  .send__icon {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 950px) {
    .container {
      width: 90%;
      padding: 30px 35px 40px 35px;
    }
  }

  @media screen and (max-width: 820px) {
    .container {
      margin: 20px 0;
      height: 100%;
    }

    .content {
      flex-direction: column-reverse;
    }

    .left__side {
      width: 100%;
      flex-direction: row;
      margin-top: 40px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .left__side::before {
      display: none;
    }

    .right__side {
      width: 100%;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 386px) {
    .topic__text {
      font-size: 1.25rem;
    }
  }
`;

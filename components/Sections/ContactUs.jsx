import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xnqwdjvw");
  return (
    <Container>
      <div className="container">
        <div className="content">
          <div className="left__side">
            <div className="address details">
              <i className="ri-map-pin-fill contactUs__icon"></i>
              <div className="topic">Address</div>
              <div className="text__one">Sidi Aissa Ben Slimane</div>
              <div className="text__two">Elkelaa Des Sraghna</div>
            </div>
            <div className="phone details">
              <i className="ri-phone-fill contactUs__icon"></i>
              <div className="topic">Phone Number</div>
              <div className="text__one">+212670281848</div>
              <div className="text__two">+212611154307</div>
            </div>

            <div className="phone details">
              <i className="ri-at-line contactUs__icon"></i>
              <div className="topic">Email Address</div>
              <div className="text__one">etthamryachraf@gmail.com</div>
              <div className="text__two">elkhalidyamine.a@gmail.com</div>
            </div>
          </div>

          <div className="right__side">
            <div className="topic__text">Get in touch with us</div>
            <p>
              If you liked one of the products that we offer to you, contact us
              and we will handle all of the rest.
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
                  placeholder="Your Country"
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
  );
};

export default ContactUs;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 80%;
    background-color: var(--white-color);
    background-color: var(--dark-blue);
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
    font-size: 14px;
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
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-red);
    color: var(--white-color);
    column-gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background-color: var(--white-color);
    color: var(--dark-red);
  }

  .send__icon {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 950px) {
    .container {
      width: 90%;
      padding: 30px 35px 40px 35px;
    }
  }

  @media screen and (max-width: 820px) {
    .container {
      margin: 40px 0;
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
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 386px) {
    .topic__text {
      font-size: 1.25rem;
    }
  }
`;

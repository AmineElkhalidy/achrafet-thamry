import React from "react";
import styled from "styled-components";

const Card = ({
  image,
  name,
  profession,
  description,
  phoneNumber,
  email,
  facebookLink,
  whatsappLink,
  githubLink,
}) => {
  return (
    <Container>
      <div className="card__img">
        <img className="image" src={image} alt="Profile Image" />
      </div>

      <div className="profile__data">
        <h3 className="name">{name}</h3>
        <div className="profession">{profession}</div>
        <p className="description">{description}</p>
        <div className="contact__info">
          <span className="contact__info-item">{phoneNumber}</span>
          <span className="contact__info-item">{email}</span>
        </div>

        <div className="social__media-container">
          <div className="social__media">
            <a href={facebookLink} className="social__media-link">
              <i className="ri-facebook-circle-fill social__media-icon"></i>
            </a>

            <a href={whatsappLink} className="social__media-link">
              <i className="ri-whatsapp-fill social__media-icon"></i>
            </a>

            {githubLink && (
              <a href={githubLink} className="social__media-link">
                <i className="ri-github-fill social__media-icon"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  // height: 510px;
  // width: 320px;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
  rgba(0, 0, 0, 0.3) 0px 15px 12px;
  background-color: var(--dark-blue);
  margin-bottom: var(--mb-1-5);
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card__img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: var(--mb-1);
    margin-top: var(--mb-0-5);
    border: 3px solid var(--light-blue);
  }

  .profile__data {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    margin-bottom: 0.25rem;
  }

  .profession {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark-red);
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1-5);
  }

  .description {
    color: var(--white-color);
    text-align: center;
    padding: 0 0.5rem;
    margin-bottom: var(--mb-0-5);
  }

  .contact__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--mb-1);
  }

  .contact__info-item {
    color: var(--white-color);
  }

  .social__media-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social__media {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .social__media-icon {
    font-size: 1.5rem;
    color: var(--dark-red);
  }
`;

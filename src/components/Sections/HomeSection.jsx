import React from "react";

// Helmet
import { Helmet } from "react-helmet";

// Styled components
import styled from "styled-components";

// Image
import HomeImg from "../../assets/images/home.png";

const HomeSection = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Browse and discover our traditional products that were made using ELQASSAB with garanted quality check..."
        />

        <title>Et-thamry Achraf Products</title>
      </Helmet>

      <HomeContainer>
        <div className="home__container container grid">
          <img src={HomeImg} alt="Green plant" className="home__img" />

          <div className="home__data">
            <span className="home__subtitle">Hello & Welcome to</span>
            <h3 className="home__title">Et-thamry Achraf Products</h3>
            <p className="home__description">
              Browse and discover the best products made with the best quality
              that a customer seek for
            </p>
          </div>
        </div>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  width: 100%;

  .home__container {
    padding-top: 1rem;
    row-gap: 1rem;
  }

  .home__img {
    width: 250px;
    justify-self: center;
  }

  .home__data {
    text-align: center;
    line-height: 1.6;
  }

  .home__subtitle {
    display: block;
    margin-bottom: -0.25rem;
  }

  .home__title {
    margin-bottom: 0.5rem;
  }

  .home__description {
    margin-bottom: 2rem;
  }
`;

export default HomeSection;

import React from "react";

// Helmet
import { Helmet } from "react-helmet";

// Styled components
import styled from "styled-components";

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
          <img src="" alt="Logo" className="home__img" />
          <div className="home__data">
            <span className="home__subtitle"></span>
            <h3 className="home__title"></h3>
            <p className="home__description"></p>
          </div>
        </div>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div``;

export default HomeSection;

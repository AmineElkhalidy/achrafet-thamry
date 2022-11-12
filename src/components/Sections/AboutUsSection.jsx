import React from "react";

// Helmet
import { Helmet } from "react-helmet";

const AboutUsSection = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get to know about our store, team and services..."
        />

        <title>About Us</title>
      </Helmet>
    </>
  );
};

export default AboutUsSection;

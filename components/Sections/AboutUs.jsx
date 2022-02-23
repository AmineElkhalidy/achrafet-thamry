import React from "react";
import Card from "../Card/Card";
import AmineImage from '../../src/assets/images/handsome-avatar.png';
import AshrafImage from "../../src/assets/images/ashraf.jpg";
import styled from "styled-components";

const INFO = [
  {
    id: "I1",
    image: AshrafImage,
    name: "Ashraf Etthamry",
    profession: "Student Of Low",
    description:
      "Hello, I am Ashraf, I am a student of low. Because I do not know what to write exactly, I will continue with BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA",
    phoneNumber: "+212670281848",
    email: "etthamryachraf@gmail.com",
    facebookLink: "#",
    githubLink: "#",
    whatsappLink: "#",
  },
  {
    id: "I2",
    image: AmineImage,
    name: "Amine Elkhalidy",
    profession: "FullStack Developer",
    description:
      "Hello, I am Amine, I am full-stack developer, with a strong background of front-end & back-end technologies, that allows me to provide quality work for customers.",
    phoneNumber: "+212611154307",
    email: "elkhalidyamine.a@gmail.com",
    facebookLink: "#",
    githubLink: "#",
    whatsappLink: "#",
  },
];

const AboutUs = () => {
  return (
    <Section className="section">
      <h2 className="section__title aboutUs__title">
        Find Out A Little More <br />
        About Us
      </h2>
      <div className="aboutUs__container container grid">
        <div className="about__data">
          <div className="about__data-description">
            We will provide you with almost everything about us:
            <p className="sentence__container">Who we are ?</p>
            <p className="sentence__container">
              What is our academic track ?
            </p>
            <p className="sentence__container">How can you reach us ?</p>
            and more, and this all done for you to feel more{" "}
            <span className="special__word">secure</span>, and to be certain
            that we are <span className="special__word">reliable</span>.
          </div>
        </div>

        <div className="info__container">
          {INFO.map((info) => (
            <Card
              key={info.id}
              image={info.image}
              name={info.name}
              profession={info.profession}
              description={info.description}
              phoneNumber={info.phoneNumber}
              email={info.email}
              facebookLink={info.facebookLink}
              githubLink={info.githubLink}
              whatsappLink={info.whatsappLink}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

//TODO: Don't forget to reuse it at the right place.
{
  /* <div className='about__data'>
                <h3 className='about__data-title' >Order What You Want, <br /> We Will Handle The Rest.</h3>
                <p className='about__data-description'>Order your favorite product at any time and we will send it to where you are.</p>
            </div> */
}

export default AboutUs;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 1rem 0 1rem;

  .about__data {
    margin-bottom: var(--mb-2);
  }

  .about__data-description {
    text-align: left;
  }

  .sentence__container {
    color: var(--dark-red);
  }

  .special__word {
    color: var(--dark-red);
    font-weight: 500;
  }

  .info__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 767px) {
    padding-top: 2rem;
    .info__container {
      flex-direction: row;
      column-gap: 5rem;
    }
  }
`;

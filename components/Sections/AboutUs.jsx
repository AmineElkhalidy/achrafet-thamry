import React from "react";
import Card from "../Card/Card";
// import AmineImage from '../../src/assets/images/amine.jpg';
import AshrafImage from "../../src/assets/images/ashraf.jpeg";
import styled from "styled-components";

const INFO = [
  {
    id: "I1",
    image: AshrafImage,
    name: "Ashraf Etthamry",
    profession: "Student Of Low",
    description:
      "Hello, I am Ashraf, I am a student of low. To be honest with you, i do not like my academic track anymore for many reasons, that's why i am trying to invest my skills in this field.",
    phoneNumber: "+212670281848",
    email: "etthamryachraf@gmail.com",
    facebookLink: "#",
    githubLink: "#",
    whatsappLink: "#",
  },
  {
    id: "I2",
    image: AshrafImage,
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
          <p className="about__data-description">
            We will provide you with almost everything about us:
            <br />
            Who we are ?,
            <br />
            What is our academic track ?, <br />
            How can you reach us ?, <br /> and more, and this all done for you
            to feel more secure, and to be certain that we are reliable.
          </p>
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
    text-align: center;
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

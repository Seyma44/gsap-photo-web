import React from "react"
import styled from "styled-components"
import img1 from "../assets/Images/dyebg1.png"
import img2 from "../assets/Images/2.jpg"
import img3 from "../assets/Images/dyebg2.png"

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  display: flex;

  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  margin-bottom: -20%;


  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    margin-bottom: -10px;
  }

  .small-img-1 {
    width: 100%;
    position: absolute;
    right: 95%;
    bottom: 10%;
    transform: rotate(3.142rad);
  }

  .small-img-2 {
    width: 100%;
    position: absolute;
    left: 40%;
    top: 30%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      margin-bottom: -10px;
    }

    .small-img-1 {
      width: 70%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }

    .small-img-2 {
      width: 60%;
      height: auto;
      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  position: absolute;
  top: 0;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    left: 0%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We&apos;re fashion studio based in california. We create unique designs
        that will blow your mind. We also design unique casting photos.
        Photography is an ART that can not be grasped by everyone.
        <br />
        <br />
        We are very dedicated to making our stylish designs. We offer unique and
        creative photos to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We
        specialize in making things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As an art label, we do our best to
        create amazing experiences for all people. We are always looking to make
        something that is adorable for everyone.
      </Left>

      <Right>
        <img width="400" height="600" src={img2} alt="About Us" />
        <img
          width="400"
          height="600"
          className="small-img-1"
          src={img1}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={img3}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;

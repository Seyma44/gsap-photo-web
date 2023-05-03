import { motion } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useLayoutEffect, useRef } from "react"
import styled from "styled-components"
import img1 from "../assets/Images/1.jpg"
import img2 from "../assets/Images/2.jpg"
import img3 from "../assets/Images/3.jpg"
import img4 from "../assets/Images/4.jpg"
import img5 from "../assets/Images/5.jpg"
import img6 from "../assets/Images/6.jpg"
import img7 from "../assets/Images/12.jpg"
import img8 from "../assets/Images/13.jpg"
import img9 from "../assets/Images/9.jpg"
import img10 from "../assets/Images/10.jpg"

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  margin: -5% 0;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 10;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.pink};
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`

//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Concept = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="concept">
      <Title data-scroll data-scroll-speed="-1">
        Concept
      </Title>
      <Left>
        <p>
          At our studio, we believe that photography is more than just taking pictures – 
          it's about telling a story, evoking emotion, and creating art. We approach every 
          project with creativity and passion, striving to deliver images that are both 
          beautiful and meaningful.
          <br /> <br />
          We pride ourselves on our attention to detail, our commitment to excellence, 
          and our ability to think outside the box. We believe that great photography 
          is all about taking risks and trying new things, and we're always up for a 
          challenge.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img3} title="Shine" />
        <Product img={img4} title="Ethnic" />
        <Product img={img1} title="Luna" />
        <Product img={img2} title="Petra" />
        <Product img={img5} title="Code" />
        <Product img={img6} title="Su" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Kut" />
        <Product img={img9} title="Alfa" />
        <Product img={img10} title="Zen" />
      </Right>
    </Section>
  );
};

export default Concept;

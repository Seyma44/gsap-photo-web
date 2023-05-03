import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, {  useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import img1 from '../assets/Images/11.jpg'
import img2 from '../assets/Images/7.jpg'
import img3 from '../assets/Images/8.jpg'
import img4 from '../assets/Images/14.jpg'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;
  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
    height: 80vh;
  }

  @media (max-width: 48em) {
    width: 60vw;
    height: 80vh;
  }

  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }

  @media (max-width: 48em) {
    width: 40vw;
  }

  @media (max-width: 30em) {
    width: 60vw;
  }
`

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: -1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    left: -0.7rem;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 2rem;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`

const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewDesign = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1= gsap.timeline();
    
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section  ref={ref} id="fixed-target" className="new-design">
      <Overlay />
      <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        New Design
      </Title>

      <Container ref={ScrollingRef}>
        <Photos img={img1} name="Fun" />
        <Photos img={img2} name="Cool" />
        <Photos img={img3} name="Life" />
        <Photos img={img4} name="Teta" />
      </Container>

      <Text data-scroll data-scroll-speed="-4">
        Whether you're a fashion designer looking to showcase your latest collection,
        a musician in need of album art, or a brand seeking to create a compelling 
        marketing campaign, our team is here to help you achieve your goals.
        <br />
        <br />
        We believe that great photography is all about taking risks and trying new things,
        and we're always up for a challenge.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text>
    </Section>
  );
};

export default NewDesign;

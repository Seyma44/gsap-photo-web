import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: relative;

  @media (max-width: 48em){
    width: 100vw;
  } 
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
  }
`;

const Banner = styled.h1`
  font-size: ${(props: any) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  color: ${(props: any) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em){
    font-size: ${(props: any) => props.theme.fontxxl};
  }
  @media (max-width: 64em){
    margin: 1rem 0;
  }
 
  @media (max-width: 48em){
    font-size: ${(props: any) => props.theme.fontxl};
    margin: 0.5rem 0;
  }

  @media (max-width: 30em){
    font-size: ${(props: any) => props.theme.fontlg};
  }

  span {
    display: block;
    background-color: ${(props: any) => props.theme.pink};
    padding: 1rem 2rem;
  }
`;

const Motto: React.FC = () => {
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
          >
            Photography that tells your story
          </span>
        </Banner>
        <Banner data-scroll data-scroll-speed="-2" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            Life is art
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            Capture it beautifully
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
            Create with passion
          </span>
        </Banner>
        <Banner data-scroll data-scroll-speed="6" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            Seeing the world through a different lens
          </span>
        </Banner>
      </Container>
    </Section>
  );
};

export default Motto;

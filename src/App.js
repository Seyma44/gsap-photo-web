import "locomotive-scroll/dist/locomotive-scroll.css"
import { AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { ThemeProvider } from "styled-components"
import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Motto from "./sections/Motto"
import NewDesign from "./sections/NewDesign"
import Concept from "./sections/Concept"
import GlobalStyles from "./styles/GlobalStyles"
import { dark } from "./styles/Themes"

function App() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}
              <Home key="home" />
              <About key="about" />
              <Concept key="Concept" />
              <Motto key="motto" />
              <NewDesign key="new arrival" />
              <Footer key="Footer" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

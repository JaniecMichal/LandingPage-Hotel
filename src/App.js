import React from "react";
import InfoHeader from "./components/InfoHeader";
import Container from "./components/Container";
import MainHeader from "./components/MainHeader";
import StickyNavigation from "./components/StickyNavigation";
import ApartamentSection from "./components/ApartamentSection";
import About from "./components/About";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";
import MobileExtraBar from "./components/MobileExtraBar";

function App() {
  return (
    <>
      <Container>
        <InfoHeader headerMessage="We are open!" />
        <MainHeader />
        <StickyNavigation />
        <ApartamentSection />
        <About />
        <Boxes />
        <Footer />
        <MobileExtraBar />
      </Container>
    </>
  );
}

export default App;

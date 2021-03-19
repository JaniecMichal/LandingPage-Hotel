import React from "react";

const Homepage = () => {
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
};

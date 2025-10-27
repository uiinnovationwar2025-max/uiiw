import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import OurPrograms from "./components/OurPrograms";
import Sponsor from "./components/Sponsor";
import Timeline from "./components/Timeline";
import WhatWeDo from "./components/WhatWeDo";

const LandingPageModules = () => {
  return (
    <>
      <Hero />
      <OurPrograms />
      <Timeline />
      <WhatWeDo />
      <Sponsor/>
      <FAQ />
    </>
  );
};

export default LandingPageModules;

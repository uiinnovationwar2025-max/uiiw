"use client";
import { useRef } from "react";
import CoreValues from "./components/CoreValues";
import Hero from "./components/Hero";
import LogoPhilosophy from "./components/LogoPhilosophy";
import VisionMission from "./components/VisionMission";

const AboutUsModules = () => {
  const coreValuesRef = useRef<HTMLDivElement>(null);

  const scrollToCoreValues = () => {
    coreValuesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero onButtonClick={scrollToCoreValues} />
      <section ref={coreValuesRef}>
        <CoreValues />
      </section>
      <VisionMission />
      <LogoPhilosophy />
    </>
  );
};

export default AboutUsModules;

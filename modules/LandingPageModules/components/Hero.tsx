import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileText } from "lucide-react";

const Hero = () => {
  return (
    <>
      <main className="relative flex gap-12 flex-col min-h-screen text-center items-center justify-center overflow-x-hidden">
        {/* Desktop Object */}
        <div className="absolute -top-24 hidden lg:block -left-14 w-5xl mx-auto max-w-screen h-[72rem] ">
          <Image src={"/hero/object-1.svg"} alt="object" fill />
        </div>

        <div className="absolute -top-24 right-0 hidden lg:block w-2xl mx-auto max-w-screen h-[72rem] ">
          <Image src={"/hero/object-2.svg"} alt="object" fill />
        </div>

        {/* Mobile Object */}
        <div className="absolute -top-48 block lg:hidden w-full mx-auto max-w-5xl h-[36rem] ">
          <Image src={"/hero/object-3.svg"} alt="object" fill />
        </div>

        <div className="absolute -bottom-64  block lg:hidden w-full mx-auto max-w-screen h-[36rem] ">
          <Image src={"/hero/object-4.svg"} alt="object" fill className="" />
        </div>

        <div className="relative max-md:w-44 max-md:h-44 w-60 h-60 ">
          <Image src={"/logo.png"} alt="Logo" fill className="object-cover" />
        </div>
        <div className="z-100">
          <p className="text-h4 md:text-sm text-center text-primary-1">
            UI INNOVATION <br /> WAR{" "}
            <span className="text-primary-3">2025</span>
          </p>
          <p className="text-h7 md:text-h4 text-primary-1">
            <span className="font-primary">#</span>
            EmpoweringMinds
            <span className="text-primary-2">EvolvingStrategy</span>
          </p>
        </div>
        <p className="font-primary font-semibold max-md:text-md md:text-lg px-10 md:px-0 md:text-s7 text-secondary-2">
          Optimizing Intelligence Diversity in Enhancing Adaptive Strategy for
          Business Management and Operation
        </p>
        <div className="md:space-x-10 flex flex-wrap justify-center gap-7 z-100 ">
          <Button variant={"primary"} size={"lg"} className="w-48 h-12 ">
            See About Us
            <ArrowUpRight />
          </Button>
          <Button variant={"tertiary"} size={"lg"} className="w-48 h-12">
            Register
            <FileText />
          </Button>
        </div>
      </main>
    </>
  );
};

export default Hero;

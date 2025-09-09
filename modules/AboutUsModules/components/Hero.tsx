import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

type HeroProps = {
  onButtonClick: () => void;
};

const Hero = ({ onButtonClick }: HeroProps) => {
  return (
    <main className="relative flex flex-col min-h-screen items-center justify-center lg:overflow-hidden ">
      {/* Desktop Object */}
      <div className="absolute -top-24 -z-40 hidden lg:block -left-14 w-5xl mx-auto max-w-screen h-[72rem] ">
        <Image src={"/landing-hero/object-1.svg"} alt="object" fill />
      </div>

      <div className="absolute -top-24 -z-40 right-0 hidden lg:block w-2xl mx-auto max-w-screen h-[72rem] ">
        <Image src={"/landing-hero/object-2.svg"} alt="object" fill />
      </div>

      {/* Mobile Object */}
      <div className="absolute -top-48 -z-40 block lg:hidden w-full mx-auto max-w-5xl h-[36rem] ">
        <Image src={"/landing-hero/object-3.svg"} alt="object" fill />
      </div>

      {/* TODO: Bisa disambung sama our programs */}
      <div className="absolute -bottom-64 -z-40 block lg:hidden w-full mx-auto max-w-5xl h-[36rem]">
        <Image src={"/landing-hero/object-4.svg"} alt="object" fill />
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl px-6 lg:px-12 space-y-10 lg:space-y-0 lg:space-x-12 z-10">
        {/* Left Side - Logo */}
        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center space-y-6">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-72 lg:h-72">
            <Image
              src={"/logo.png"}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-h4 sm:text-3xl lg:text-4xl font-bold text-center text-primary-1">
            UI INNOVATION <br /> WAR{" "}
            <span className="text-primary-3">2025</span>
          </p>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-h4 sm:text-3xl lg:text-5xl font-bold leading-tight text-primary-1">
            What is UI Innovation War?
          </h1>
          <p className="font-primary font-medium text-sm sm:text-base lg:text-lg text-secondary-2 text-s7">
            UI Innovation War adalah wadah penyaluran intelektualitas dan
            pemikiran kritis dari pelajar dan mahasiswa melalui media kompetisi
            studi kasus bisnis dan perancangan bisnis untuk menghasilkan
            strategi bisnis yang adaptif
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={onButtonClick}
            className="w-full lg:w-fit px-6 h-12 flex items-center justify-center gap-2"
          >
            Our Core Values <ArrowDown size={20} />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Hero;

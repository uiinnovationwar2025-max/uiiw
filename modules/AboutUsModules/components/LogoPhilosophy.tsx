import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import CardComponent from "@/components/Card";

const LogoPhilosophy = () => {
  const contents = [
    {
      imgSource: "/Filosofi1.png",
      description:
        "Dua balok yang menghadap ke atas dan ke depan melambangkan keberlanjutan",
    },
    {
      imgSource: "/Filosofi1.png",
      description:
        "Dua balok yang menghadap ke atas dan ke depan melambangkan keberlanjutan",
    },
  ];

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden  py-12 justify-center">
      <div className="absolute max-md:w-2xl overflow-hidden max-md:h-[42rem] w-screen h-screen">
        <Image
          src={"/LogoPhiloLines.webp"}
          alt="Lines"
          fill
          className=" object-contain"
        />
      </div>

      {/* Heading */}

      <div className="w-full font-visby text-3xl md:text-6xl text-center text-primary-1">
        Logo Philosophy
      </div>

      <div className="flex max-md:px-20  justify-center">
        <Carousel className="w-full max-w-sm md:max-w-2xl  ">
          <CarouselContent className=" gap-10 items-center  ">
            {contents.map(({ description, imgSource }, index) => (
              <CarouselItem key={index}>
                <div className="flex  flex-col justify-center items-center">
                  <div className="relative my-20 md:w-full w-lg h-44 md:max-w-xl md:h-[36rem]">
                    <Image
                      src={imgSource}
                      alt="Logo Philosphy"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="font-visby text-sm md:text-xl text-center bg-gradient-to-br from-secondary-3 to-secondary-1 text-white px-8  rounded-2xl py-4 md:py-8">
                    <p>{description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-md:w-8 max-md:h-8 bg-secondary-2 w-12 h-12 text-tertiary-5" />
          <CarouselNext className="max-md:w-8 max-md:h-8 bg-secondary-2 w-12 h-12 text-tertiary-5" />
        </Carousel>
      </div>
    </main>
  );
};

export default LogoPhilosophy;

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
    <main className="min-h-screen flex flex-col  py-12 justify-center">
      <div className="absolute max-md:w-2xl max-md:h-[42rem] w-screen h-screen">
        <Image
          src={"/LogoPhiloLines.webp"}
          alt="Lines"
          fill
          className=" object-contain"
        />
      </div>

      <img
        src="/LogoPhiloLines.webp"
        className="absolute inset-0 w-full h-full object-scale-down -z-10"
        alt="Background Lines"
      />

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
          <CarouselPrevious className="bg-secondary-2 w-12 h-12 text-tertiary-5" />
          <CarouselNext className="bg-secondary-2 w-12 h-12 text-tertiary-5" />
        </Carousel>

        {/* <Carousel className="w-full max-w-4xl h-auto">
          <CarouselContent>
            {contents.map(({ imgSource, description }, index) => (
              <CarouselItem key={index} className="h-auto ">
                <Card className="bg-transparent border-0 shadow-none">
                  <CardContent className="flex flex-col items-center justify-center">
                    <div className="w-70 lg:w-100 flex justify-center translate-x-3">
                      <img
                        src={imgSource}
                        className="w-full h-full "
                        alt="Logo Philosophy"
                      />
                    </div>
                    <div className="rounded-2xl w-[20.438rem] lg:w-[24rem] h-[3.5rem] lg:h-[4rem] bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 my-7 text-center">
                      <div className="font-visby text-xs leading-4 lg:text-sm lg:leading-5 text-primary-5 my-3">
                        {description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="w-10 h-10 bg-black" />
          <CarouselPrevious className="w-10 h-10 bg-black" />
        </Carousel> */}
      </div>
    </main>
  );
};

export default LogoPhilosophy;

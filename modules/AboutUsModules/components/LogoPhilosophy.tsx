import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const LogoPhilosophy = () => {
  const contents = [
    {
      imgSource: "/Filosofi1.webp",
      description: "Dua balok yang menghadap ke atas dan ke depan melambangkan keberlanjutan",
    },
    {/* TO BE ADDED*/}
  ]

  return (
    <main className="relative flex flex-col items-center py-2 lg:py-12">
      <img
      src="/LogoPhiloLines.webp"
      className="absolute inset-0 w-full h-full object-scale-down -z-10"
      alt="Background Lines"
      />

      {/* Heading */}
      <div className="w-full font-visby text-3xl leading-8 lg:text-6xl lg:leading-14 text-center text-primary-1">
        Logo Philosophy 
      </div>

      <div className="mt-5 lg:mt-9">
        <Carousel className="w-full max-w-4xl h-auto">
          <CarouselContent className="">
            {contents.map(({imgSource, description}, index) => (
              <CarouselItem key={index} className="h-auto">
                <Card className="bg-transparent border-none h-full">
                  <CardContent className="flex flex-col items-center justify-center">
                    <div className="w-70 lg:w-100 h-xl flex justify-center translate-x-3">
                      <img
                        src={imgSource}
                        className="w-full h-full object-scale-down"
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
          <CarouselPrevious className="left-70 lg:left-50 top-35 lg:top-45 rounded-full bg-secondary-1 w-10 h-10" />
          <CarouselNext className="right-73 lg:right-53 top-35 lg:top-45 rounded-full bg-secondary-1 w-10 h-10" />
        </Carousel>
      </div>
    </main>
  );
};

export default LogoPhilosophy;



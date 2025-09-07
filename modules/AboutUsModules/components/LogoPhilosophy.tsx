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
  return (
    <main className="min-h-screen flex flex-col items-center py-12 sm:py-16">
      {/* Heading */}
      <div className="mb-10 w-full text-h1 text-center text-primary-1">
        Logo Philosophy 
      </div>
    
      <div className="">
        <Carousel className="w-full max-w-4xl h-auto">
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-auto">
                <div className="p-">
                  <Card className="bg-transparent border-none h-full">
                    <CardContent className="flex flex-col items-center justify-center">
                      <img
                      src="/Filosofi1.webp"
                      className="block mb-20"
                      style={{ width: "auto", height: "auto", maxWidth: "none", maxHeight: "none" }}
                      alt="Background Lines"
                      />
                      <div className="rounded-2xl w-[52.875rem] h-[7rem] bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 py-3 text-center">
                        <div className="text-h5 text-primary-5 my-3">
                          Dua balok yang menghadap ke atas dan ke depan melambangkan keberlanjutan
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        <CarouselPrevious className="rounded-full bg-secondary-1 w-15 h-15" />
        <CarouselNext className="rounded-full bg-secondary-1 w-15 h-15" />
      </Carousel>
      </div>
    </main>
  );
};

export default LogoPhilosophy;



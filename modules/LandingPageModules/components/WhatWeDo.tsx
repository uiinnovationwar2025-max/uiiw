import Image from "next/image";

const WhatWeDo = () => {
  return (
    <main className="flex flex-col min-h-dvh items-center py-12 sm:py-24 relative">
      <div className="absolute top-1/2 -translate-y-1/2 -z-40 block w-full h-[144rem] overflow-hidden">
        <Image
          src={"/landing-hero/object-4.svg"}
          alt="object"
          fill
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <div className="my-7 lg:my-13 w-full font-visby text-3xl leading-8 md:text-6xl lg:leading-14 text-center text-primary-1">
        What We<span className="font-primary">'</span>ve Done..
      </div>

      {/* Grid (Using Flexbox) */}
      <div className="flex max-sm:flex-col flex-row  max-sm:gap-2 gap-4 justify-center w-full px-8">
        {/* Right Side */}
        <div className="max-sm:w-full w-1/3 h-[33.25rem] max-sm:h-32 ">
          <div className="w-full h-full max-sm:border-4 border-8 border-secondary-2 rounded-3xl bg-black"></div>
        </div>

        {/* Left Side */}
        <div className="flex flex-col max-sm:h-60 max-sm:w-full w-2/3 max-sm:gap-2 gap-4 ">
          <div className="flex  w-full h-64 max-sm:gap-2 gap-4">
            <div className=" w-3/5 h-full max-sm:border-4 border-8 border-secondary-2 rounded-3xl bg-black "></div>
            <div className=" w-2/5 h-full max-sm:border-4 border-8 border-secondary-2 rounded-3xl bg-black"></div>
          </div>
          <div className="flex w-full h-64 max-sm:gap-2 gap-4">
            <div className=" w-2/5 h-full max-sm:border-4 border-8 border-secondary-2 rounded-3xl bg-black "></div>
            <div className=" w-3/5 h-full max-sm:border-4 border-8 border-secondary-2 rounded-3xl bg-black"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatWeDo;

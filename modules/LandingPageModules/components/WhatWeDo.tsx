import Image from "next/image";

const WhatWeDo = () => {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 sm:py-24 relative">
      <div className="absolute top-1/2 -translate-y-1/2 -z-40 block w-full h-[144rem] overflow-hidden">
        <Image
          src={"/landing-hero/object-4.svg"}
          alt="object"
          fill
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <div className="my-7 lg:my-13 w-full font-visby text-2xl leading-8 lg:text-6xl lg:leading-14 text-center text-primary-1">
        What We<span style={{ fontFamily: "Arial, sans-serif" }}>'</span>ve
        Done..
      </div>

      {/* Grid (Using Flexbox) */}
      <div className="flex justify-center w-full">
        {/* Partition Left Side*/}
        <div className="flex flex-col w-auto h-48 lg:w-[50.798rem] lg:h-[33.25rem] mr-1 lg:mr-5 mb-2 lg:mb-0">
          <div className="flex justify-end w-auto h-24 lg:w-[50.8125rem] lg:h-64">
            <div className="border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black w-[7.5rem] h-24 lg:w-[29.125rem] lg:h-64 lg:mx-1"></div>
            <div className="border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black w-[5.5rem] h-24 lg:w-80 lg:h-64 ml-2 lg:ml-4"></div>
          </div>

          <div className="flex w-full h-24 lg:w-[50.813rem] lg:h-64 mt-2 lg:mt-6 justify-end">
            <div className="border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black w-[5.5rem] h-24 lg:w-80 lg:h-64 mr-2 lg:mr-0 lg:mx-1"></div>
            <div className="border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black w-[7.5rem] h-24 lg:w-[29.188rem] lg:h-64 lg:ml-4"></div>
          </div>
        </div>

        {/* Partition Right Side  */}
        <div className="w-28 h-[12.25rem] lg:w-80 lg:h-[33.25rem] mx-1 lg:mx-0">
          <div className="border-4 lg:border-8 border-secondary-2 rounded-lg w-full h-full bg-black"></div>
        </div>
      </div>
    </main>
  );
};

export default WhatWeDo;

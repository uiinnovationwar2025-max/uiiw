import Image from "next/image";

const WhatWeDo = () => {
  return (
    <main className="flex flex-col items-center py-12 sm:py-24 relative">
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
      <div className="flex flex-col lg:flex-row justify-center w-full px-4 sm:px-6 lg:px-8">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-2/3 lg:mr-5">
          <div className="flex w-full h-48 lg:h-64">
            <div className="w-3/5 h-full border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black mr-2 lg:mr-4"></div>
            <div className="w-2/5 h-full border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black"></div>
          </div>
          <div className="flex w-full h-48 lg:h-64 mt-2 lg:mt-6">
            <div className="w-2/5 h-full border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black mr-2 lg:mr-4"></div>
            <div className="w-3/5 h-full border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/3 h-48 lg:h-[33.25rem] mt-2 lg:mt-0">
          <div className="w-full h-full border-4 lg:border-8 border-secondary-2 rounded-lg lg:rounded-3xl bg-black"></div>
        </div>
      </div>
    </main>
  );
};

export default WhatWeDo;

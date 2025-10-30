"use client";

import Image from "next/image";

const Sponsor = () => {
  const companyPartners = [
    { name: "BNI", logo: "/sponsor-img/Compile Logo Company Partner/BNI.png" },
  ];

  const sponsors = [
    {
      name: "BANK BJB",
      logo: "/sponsor-img/Compile Logo Sponsor/BANK BJB.png",
    },
    { name: "DANONE", logo: "/sponsor-img/Compile Logo Sponsor/DANONE.png" },
    {
      name: "LOKALATE",
      logo: "/sponsor-img/Compile Logo Sponsor/LOKALATE.jpg",
    },
    {
      name: "NUTRISARI",
      logo: "/sponsor-img/Compile Logo Sponsor/NUTRISARI.webp",
    },
  ];

  const mediaPartners = [
    {
      name: "977 Top Radio",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/977 top radio.jpg",
    },
    {
      name: "Acara Mahasiswa",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/AcaraMahasiswa-PNG.png",
    },
    {
      name: "Ada Event",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/ada event logo.png",
    },
    {
      name: "Coolyeah UI",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Coolyeah.ui logo jpg_.jpg",
    },
    {
      name: "Event Network",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Event Network 2.png",
    },
    {
      name: "Eventbanget",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Eventbanget Logo White.png",
    },
    {
      name: "Event Mahasiswa",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/EVENTMAHASISWA.png",
    },
    {
      name: "Gandeng",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Gandeng (Logogram + Logotype) V2_TUSCANY.png",
    },
    {
      name: "GLOBY",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/GLOBY.png",
    },
    {
      name: "Growthhub",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/growthhub.png",
    },
    {
      name: "IMG_0299",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/IMG_0299.PNG",
    },
    {
      name: "IMG_6311",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/IMG_6311.PNG",
    },
    {
      name: "Internnet",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/internnet logo 1.png",
    },
    {
      name: "Katadata",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Katadatacoid logo.png",
    },
    {
      name: "Kompasiana",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Kompasiana-biru.png",
    },
    {
      name: "KSEP",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/KSEP LOGO.png",
    },
    {
      name: "Event List",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/logo event.list.png",
    },
    {
      name: "Info Olimpiade",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/LOGO INFO OLIMPIADE.png",
    },
    {
      name: "Inside Insight UI",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/LOGO Inside Insight UI.png",
    },
    {
      name: "Intersummit",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Logo Intersummit2 3.png",
    },
    {
      name: "MSS",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/LOGO MSS (merah).png",
    },
    {
      name: "PYC",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Logo PYC-01.png",
    },
    {
      name: "Studentpreneur",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/logo studentpreneur.png",
    },
    {
      name: "UI Event",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Logo UI Event.png",
    },
    {
      name: "Yoursay",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Logo Yoursay Warna (1).png",
    },
    {
      name: "Lombok Bisnis",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/LOGO_LOMBABISNIS.png",
    },
    {
      name: "No Background",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/no background.png",
    },
    {
      name: "PRFM News",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/PRFM News Channel Logo.jpg",
    },
    {
      name: "Radio MU Unpad",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/RadioMU Unpad logo.png",
    },
    {
      name: "SDGs UI",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/sdgs ui_.png",
    },
    {
      name: "SRE UNJ",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/SRE UNJ non bg.png",
    },
    {
      name: "Strativate",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/strativate.png",
    },
    {
      name: "TEC Untar",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/tec_untar.png",
    },
    {
      name: "Tempo",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Tempo White RED.png",
    },
    {
      name: "UI Women in Business",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/UI Women in Business.png",
    },
    {
      name: "Webinar Center ID",
      logo: "/sponsor-img/FIX Compile Logo Media Partner/Webinar Center ID Logo.png",
    },
  ];

  return (
    <main className=" flex flex-col items-center py-12 min-h-screen">
      {/* Heading */}
      <div className="my-4 lg:my-8 w-full font-visby text-4xl leading-10 md:text-7xl lg:leading-16 text-center text-primary-1">
        Our <span className="font-primary">Partners</span>
      </div>

      {/* Company Partner Section */}
      <div className="w-full max-w-6xl px-4 mb-20">
        <h2 className="text-3xl md:text-5xl font-visby text-primary-1 text-center mb-16">
          Company Partner
        </h2>
        <div className="flex justify-center">
          <Image
            src={companyPartners[0].logo}
            alt={companyPartners[0].name}
            width={300}
            height={150}
            className="object-contain"
          />
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="w-full max-w-6xl px-4 mb-20">
        <h2 className="text-3xl md:text-5xl font-visby text-primary-1 text-center mb-16">
          Sponsored By
        </h2>
        <div className=" flex flex-wrap justify-center items-center gap-4 md:gap-16">
          {sponsors.map((sponsor, index) => (
            <Image
              key={index}
              src={sponsor.logo}
              alt={sponsor.name}
              width={200}
              height={100}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Media Partner Section */}
      <div className="w-full max-w-6xl px-4 mb-20">
        <h2 className="text-3xl md:text-5xl font-visby text-primary-1 text-center mb-16">
          Media Partner
        </h2>
        <div className="hidden md:flex md:flex-wrap justify-center items-center gap-4 md:gap-12">
          {mediaPartners.map((partner, index) => (
            <Image
              key={index}
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="object-contain"
            />
          ))}
        </div>
        <div className="md:hidden overflow-hidden relative">
          <div className="flex w-max animate-marquee whitespace-nowrap space-x-6">
            {mediaPartners.concat(mediaPartners).map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sponsor;

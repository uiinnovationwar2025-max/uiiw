"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { File, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Menu {
  value: string;
  title: string;
  description: string;
  url: string;
  opreg: string;
}

const menus: Menu[] = [
  {
    value: "duwi",
    title: "Discover UI with Innovators (DUWI)",
    description:
      'Discover UI With Innovators (DUWI) 2025 adalah sebuah acara luring yang menjadi bagian dari rangkaian UI Innovation War 2025. Dengan tema "Inspiring Future Leaders to Compete and Create", acara ini bertujuan memberikan wawasan dan inspirasi mengenai dunia kompetisi bisnis bagi siswa SMA/SMK di seluruh Indonesia, serta bermanfaat bagi mahasiswa.',
    url: "",
    opreg: "Coming Soon",
  },
  {
    value: "mcc",
    title: "Mini Case Competition",
    description:
      "Mini Case Competition merupakan kegiatan pre-event daring pada UI Innovation War 2025 yang berperan dalam menarik minat mahasiswa S1 untuk berpartisipasi dalam Business Case Competition dari UI Innovation War 2025. Tujuannya adalah untuk mengasah kemampuan peserta dalam memahami dan menyelesaikan tantangan bisnis nyata (real case) yang diberikan oleh case collaborator. Peserta akan diberikan waktu pengerjaan kasus selama 72 jam, setelah itu akan diumumkan pemenangnya saat acara Discover UI with Innovators DUWI 2025.",
    url: "https://bit.ly/OpregMCCUIIW2025",
    opreg: "Pendaftaran dibuka 12 September 2025",
  },
  {
    value: "bpc",
    title: "Business Plan Competition",
    description:
      "Business Plan Competition (BPC) merupakan kompetisi rencana bisnis yang diselenggarakan untuk siswa Sekolah Menengah Atas (SMA). Tujuannya adalah untuk mendorong kreativitas, inovasi, dan semangat kewirausahaan di kalangan remaja. BPC dilengkapi dengan mentoring yang merupakan kegiatan pelatihan khusus bagi para finalis BPC untuk memberikan performa yang maksimal dalam final pitch deck. Kegiatan mentoring terdiri atas pemberian evaluasi, saran, dan kritik dari mentor terhadap finalis. Pelaksanaan mentoring dilakukan secara daring dengan sistem breakout room.",
    url: "",
    opreg: "Coming Soon September 2025",
  },
  {
    value: "bcc",
    title: "Business Case Competition",
    description:
      "Business Case Competition (BCC) merupakan kompetisi studi kasus bisnis yang dilakukan oleh tim-tim mahasiswa dalam bersaing untuk merancang solusi bisnis yang inovatif dan mempresentasikannya di hadapan dewan juri. BCC dilengkapi dengan mentoring yang merupakan kegiatan pelatihan khusus bagi para finalis BCC untuk memberikan performa yang maksimal dalam final pitch deck. Kegiatan mentoring terdiri atas pemberian evaluasi, saran, dan kritik dari mentor terhadap finalis. Pelaksanaan mentoring dilakukan secara daring dengan sistem breakout room.",
    url: "",
    opreg: "Coming Soon September 2025",
  },
];

const RegisterModules = () => {
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);
  const [clickedMenu, setClickedMenu] = useState(menus[0]);

  const handleClick = (menu: any) => {
    setSelectedMenu(menu);
    setClickedMenu(menu);
  };

  return (
    <main className="relative flex max-sm:gap-6 flex-col min-h-screen text-center items-center lg:overflow-hidden justify-center pt-30 sm:pt-40 pb-20">
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
      <div className="text-2xl leading-8 lg:text-5xl lg:leading-14 text-center font-visby bg-gradient-to-br from-[#00567A] to-[#00344B] px-5 lg:px-12 py-2 lg:py-4 rounded-full text-primary-5">
        Register
      </div>
      <div className="w-full relative">
        <img
          src={"/register/bg-register.webp"}
          alt="object"
          className="object-contain"
        />
        <div className="flex items-center w-full px-[5%] gap-[1%] h-full absolute top-0">
          <div
            className="group w-1/4 cursor-pointer h-2/3 relative"
            onClick={() => handleClick(menus[0])}
          >
            <Image
              src={"/register/duwi-frame.webp"}
              alt="object"
              className={cn(
                "object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100",
                clickedMenu.value === "duwi" && "scale-105 saturate-100"
              )}
              fill
              sizes="100%"
            />
            <Image
              src={"/register/duwi.webp"}
              alt="object"
              className={cn(
                "object-contain scale-85 group-hover:scale-75 transition",
                clickedMenu.value === "duwi" && "scale-75"
              )}
              fill
              sizes="100%"
            />
          </div>
          <div
            className="group w-1/4 cursor-pointer h-[52%] relative"
            onClick={() => handleClick(menus[1])}
          >
            <Image
              src={"/register/mcc-frame.webp"}
              alt="object"
              className={cn(
                "object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100",
                clickedMenu.value === "mcc" && "scale-105 saturate-100"
              )}
              fill
              sizes="100%"
            />
            <Image
              src={"/register/mcc.webp"}
              alt="object"
              className={cn(
                "object-contain scale-85 group-hover:scale-75 transition",
                clickedMenu.value === "mcc" && "scale-75"
              )}
              fill
              sizes="100%"
            />
          </div>
          <div
            className="group w-1/4 cursor-pointer h-[52%] relative"
            onClick={() => handleClick(menus[2])}
          >
            <Image
              src={"/register/bpc-frame.webp"}
              alt="object"
              className={cn(
                "object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100",
                clickedMenu.value === "bpc" && "scale-105 saturate-100"
              )}
              fill
              sizes="100%"
            />
            <Image
              src={"/register/bpc.webp"}
              alt="object"
              className={cn(
                "object-contain scale-85 group-hover:scale-80 transition",
                clickedMenu.value === "bpc" && "scale-75"
              )}
              fill
              sizes="100%"
            />
          </div>
          <div
            className="group w-1/4 cursor-pointer h-2/3 relative"
            onClick={() => handleClick(menus[3])}
          >
            <Image
              src={"/register/bcc-frame.webp"}
              alt="object"
              className={cn(
                "object-contain group-hover:scale-105 transition saturate-0 group-hover:saturate-100",
                clickedMenu.value === "bcc" && "scale-105 saturate-100"
              )}
              fill
              sizes="100%"
            />
            <Image
              src={"/register/bcc.webp"}
              alt="object"
              className={cn(
                "object-contain scale-85 group-hover:scale-75 transition",
                clickedMenu.value === "bcc" && "scale-75"
              )}
              fill
              sizes="100%"
            />
          </div>
        </div>
      </div>
      <div className="rounded-2xl max-w-[32rem] mx-8 bg-gradient-to-br from-secondary-3 to-secondary-1 px-5 py-5 lg:py-3 text-center">
        <div className="font-primary font-bold text-lg leading-6 lg:text-2xl lg:leading-8 text-primary-5 lg:my-3">
          {selectedMenu.title}
        </div>
        <div className="font-primary text-xs leading-4 lg:text-sm lg:leading-5 text-primary-5 mt-2 lg:mt-0">
          {selectedMenu.description}
        </div>
        {selectedMenu.url == "" ? (
          <h1 className="font-primary font-bold leading-6 lg:text-lg lg:leading-8 text-primary-5 my-2 lg:my-3">
            {selectedMenu.opreg}
          </h1>
        ) : (
          <Link href={selectedMenu.url}>
            <Button className="w-full mt-4">
              Register <FileText />
            </Button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default RegisterModules;

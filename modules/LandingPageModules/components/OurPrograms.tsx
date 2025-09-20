"use client";
import { useState, useEffect } from "react";
import CardComponent from "../../../components/Card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Program {
  id: number;
  img: string;
  name: string;
  description: string;
  opreg: string;
}

const OurPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProgram]);

  const programs: Program[] = [
    {
      id: 1,
      img: "/duwi.png",
      name: "DUWI",
      description:
        "Discover UI With Innovators (DUWI) 2025 adalah sebuah acara talkshow yang menjadi bagian dari rangkaian UI Innovation War 2025. Dengan tema “Inspiring Future Leaders to Compete and Create”, acara ini bertujuan memberikan wawasan dan inspirasi mengenai dunia kompetisi bisnis bagi siswa SMA/SMK di seluruh Indonesia, serta bermanfaat bagi mahasiswa.",
      opreg: "Coming Soon",
    },
    {
      id: 2,
      img: "/mcc.png",
      name: "MCC",
      description:
        "Mini Case Competition merupakan kegiatan pre-event daring pada UI Innovation War 2025 yang berperan dalam menarik minat mahasiswa S1 untuk berpartisipasi dalam Business Case Competition dari UI Innovation War 2025. Tujuannya adalah untuk mengasah kemampuan peserta dalam memahami dan menyelesaikan tantangan bisnis nyata (real case) yang diberikan oleh case collaborator. Peserta akan diberikan waktu pengerjaan kasus selama 72 jam, setelah itu akan diumumkan pemenangnya saat acara Discover UI with Innovators DUWI 2025.",
      opreg: "",
    },
    {
      id: 3,
      img: "/bpc.png",
      name: "BPC",
      description:
        "Business Plan Competition (BPC) merupakan kompetisi rencana bisnis yang diselenggarakan untuk siswa Sekolah Menengah Atas (SMA). Tujuannya adalah untuk mendorong kreativitas, inovasi, dan semangat kewirausahaan di kalangan remaja. BPC dilengkapi dengan mentoring yang merupakan kegiatan pelatihan khusus bagi para finalis BPC untuk memberikan performa yang maksimal dalam final pitch deck. Kegiatan mentoring terdiri atas pemberian evaluasi, saran, dan kritik dari mentor terhadap finalis. Pelaksanaan mentoring dilakukan secara daring dengan sistem breakout room.",
      opreg: "Coming Soon ",
    },
    {
      id: 4,
      img: "/bcc.png",
      name: "BCC",
      description:
        "Business Case Competition (BCC) merupakan kompetisi studi kasus bisnis yang dilakukan oleh tim-tim mahasiswa dalam bersaing untuk merancang solusi bisnis yang inovatif dan mempresentasikannya di hadapan dewan juri. BCC dilengkapi dengan mentoring yang merupakan kegiatan pelatihan khusus bagi para finalis BCC untuk memberikan performa yang maksimal dalam final pitch deck. Kegiatan mentoring terdiri atas pemberian evaluasi, saran, dan kritik dari mentor terhadap finalis. Pelaksanaan mentoring dilakukan secara daring dengan sistem breakout room.",
      opreg: "Coming Soon ",
    },
  ];

  const openModal = (program: Program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <main className="flex flex-col items-center py-12 sm:py-24 relative bg-no-repeat bg-center bg-contain overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -z-40 block w-full h-[144rem]">
        <Image
          src={"/landing-hero/object-3.svg"}
          alt="object"
          fill
          className="object-contain scale-125"
        />
      </div>
      <h1 className="text-primary-1 font-visby text-3xl sm:text-5xl font-bold mt-6 mb-6 sm:mb-24">
        Our Programs
      </h1>
      <div
        className="
          flex flex-col gap-6 w-full max-w-6xl px-4
          sm:grid sm:grid-cols-2 sm:gap-x-6 lg:gap-x-12 sm:gap-y-10
        "
      >
        {programs.map((program, index) => (
          <div
            key={program.id}
            onClick={() => openModal(program)}
            className={`
              border-4 lg:border-8 border-secondary-2 rounded-lg sm:rounded-3xl bg-black cursor-pointer
              flex items-center justify-center
              transition hover:scale-105
              overflow-hidden
               ${index === 4 ? "sm:translate-x-1/2 sm:ml-3 lg:ml-6" : ""}
            `}
            style={{
              aspectRatio: "476/282",
              width: "100%",
              minWidth: "200px",
              maxHeight: "320px",
            }}
          >
            <Image
              src={program.img}
              alt="image"
              width={476}
              height={282}
              className={`object-cover w-full h-full ${
                program.opreg === "" || "opacity-70"
              }`}
            />
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <CardComponent
            className="pt-5 pb-8 px-4 sm:px-8 rounded-xl w-[98vw] max-w-[720px] h-auto text-white"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
            style={{
              aspectRatio: "720/320",
              maxHeight: "95vh",
            }}
          >
            <div className="flex flex-col items-center w-full">
              <h2 className="text-center w-full text-h3 font-bold mb-4 mt-5">
                {selectedProgram.name}
              </h2>
              <p className="mb-8 text-left w-full text-b7">
                {selectedProgram.description}
              </p>
              <div className="w-full flex justify-center">
                {selectedProgram.opreg !== "" ? (
                  <h1 className="font-primary font-bold leading-6 lg:text-lg lg:leading-8 text-primary-5 lg:my-3">
                    {selectedProgram.opreg}
                  </h1>
                ) : (
                  <Link href="/register">
                    <Button variant="primary" size="lg" className="w-full h-12">
                      Register
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </CardComponent>
        </div>
      )}
    </main>
  );
};

export default OurPrograms;

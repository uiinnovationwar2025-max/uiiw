"use client";
import { useState, useEffect } from "react";
import CardComponent from "../../../components/Card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Program {
  id: number;
  name: string;
  description: string;
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
      name: "DUWI",
      description:
        "Discover UI With Innovators (DUWI) 2025 adalah sebuah acara luring yang menjadi bagian dari rangkaian UI Innovation War 2025. Dengan tema “Inspiring Future Leaders to Compete and Create”, acara ini bertujuan memberikan wawasan dan inspirasi mengenai dunia kompetisi bisnis bagi siswa SMA/SMK di seluruh Indonesia, serta bermanfaat bagi mahasiswa.",
    },
    { id: 2, name: "Program 2", description: "Lorem ipsum dolor sit amet." },
    { id: 3, name: "Program 3", description: "Lorem ipsum dolor sit amet." },
    { id: 4, name: "Program 4", description: "Lorem ipsum dolor sit amet." },
    { id: 5, name: "Program 5", description: "Lorem ipsum dolor sit amet." },
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
               ${index === 4 ? "sm:translate-x-1/2 sm:ml-3 lg:ml-6" : ""}
            `}
            style={{
              aspectRatio: "476/282",
              width: "100%",
              minWidth: "200px",
              maxHeight: "320px",
            }}
          ></div>
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
                <Button variant="primary" size="lg" className="w-full h-12">
                  Register
                </Button>
              </div>
            </div>
          </CardComponent>
        </div>
      )}
    </main>
  );
};

export default OurPrograms;

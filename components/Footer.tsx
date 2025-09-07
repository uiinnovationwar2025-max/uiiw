import Image from "next/image";
import Link from "next/link";
import { Instagram, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="flex max-sm:flex-col flex-row items-center max-sm:justify-center justify-between bg-gradient-to-b border-t-3 border-primary-1 from-primary-5 to-primary-4 px-12 py-6  text-gray-100 mt-auto">
        <div className="flex flex-col  max-sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-20 h-20">
              <Image
                src={"/logo.png"}
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-visby text-primary-1 text-xl">
              UI <br /> INNOVATION <br /> WAR{" "}
              <span className="text-primary-3">2025</span>
            </p>
          </div>
          <p className="text-primary-1 text-center font-primary font-normal text-sm mt-4">
            &#169; 2025 UI Innovation War. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col max-sm:flex-row gap-3 text-primary-1 font-primary text-sm max-sm:mt-6 font-semibold ">
          <p className="inline-flex gap-2">
            <span>
              <Instagram />
            </span>{" "}
            @ui.innovationwar
          </p>
          <p className="inline-flex gap-2">
            <span>
              <img src="/tiktok.svg" />
            </span>{" "}
            @ui_innovationwar
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

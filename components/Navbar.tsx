"use client";
import Image from "next/image";
import { ChevronDown, AlignRight } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex items-center justify-center px-10 py-8 z-50 transition-all duration-500 delay-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-wrap w-7xl bg-gradient-to-b from-primary-5 to-primary-4 items-center justify-between max-md:border-2 border-3 border-primary-1 rounded-full max-md:px-8 px-12 py-2">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative max-md:w-8 max-md:h-8 w-14 h-14">
              <Image
                src={"/logo.png"}
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-visby font-bold max-md:text-sm text-md text-primary-1">
              UI <br className="max-md:hidden" /> INNOVATION <br /> WAR{" "}
              <span className="text-primary-2">2025</span>
            </p>
          </div>
          <div className="flex max-md:hidden flex-row font-semibold text-md font-visby gap-10 text-primary-1">
            <p className="hover:cursor-pointer">Home</p>
            <p className="hover:cursor-pointer">About Us</p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Programs{" "}
              <span>
                <ChevronDown />
              </span>
            </p>
            <p className="hover:cursor-pointer">Register</p>
          </div>
          <AlignRight className="size-7 md:hidden text-primary-1 " />
        </nav>
      </div>
    </>
  );
};

export default Navbar;

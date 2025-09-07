"use client";
import Image from "next/image";
import { ChevronDown, AlignRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex items-center z-[999] justify-center px-10 py-8 transition-all duration-500 delay-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-wrap w-7xl bg-gradient-to-b from-primary-5 to-primary-4 items-center justify-between max-md:border-2 border-3 border-primary-1 rounded-full max-md:px-8 px-12 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative max-md:w-8 max-md:h-8 w-14 h-14">
              <Image
                src={"/logo.png"}
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-visby font-bold max-md:text-sm text-lg text-primary-1">
              UI INNOVATION <br /> WAR{" "}
              <span className="text-primary-2">2025</span>
            </p>
          </div>
          <div className="flex max-md:hidden flex-row font-semibold text-md font-visby gap-10 text-primary-1">
            <Link href="/" className="hover:cursor-pointer ">
              Home
            </Link>
            <Link href="/about-us" className="hover:cursor-pointer">
              About Us
            </Link>
            <Link href="/register" className="hover:cursor-pointer">
              Register
            </Link>
          </div>
          <AlignRight
            onClick={() => setIsOpen(!isOpen)}
            className="size-7 md:hidden text-primary-1 hover:cursor-pointer "
          />
        </nav>
      </div>

      {/* Mobile View */}
      <div
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } fixed flex sm:hidden flex-col pb-24 backdrop-blur-xl transition-all duration-700 h-screen w-screen items-center justify-center z-[9999] gap-20`}
      >
        <div className="relative w-24 h-24">
          <Image src={"/logo.png"} alt="logo" fill className="object-cover" />
        </div>
        <div className="text-center font-visby text-shadow-black text-3xl text-primary-1 space-y-10">
          <p>Home</p>
          <p>About Us</p>
          <p>Programs</p>
          <p>Register</p>
        </div>
        <Button
          variant={"tertiary"}
          onClick={() => setIsOpen(!isOpen)}
          className="w-48 text-2xl"
        >
          Exit
        </Button>
      </div>
    </>
  );
};

export default Navbar;

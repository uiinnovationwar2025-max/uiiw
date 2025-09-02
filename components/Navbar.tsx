import Image from "next/image";
import { ChevronDown, AlignRight } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="relative flex items-center justify-center px-10 py-8">
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
            <p>Home</p>
            <p>About Us</p>
            <p className="flex items-center gap-2">
              Programs{" "}
              <span>
                <ChevronDown />
              </span>
            </p>
            <p>Register</p>
          </div>
          <AlignRight className="size-7 md:hidden text-primary-1" />
        </nav>
      </div>
    </>
  );
};

export default Navbar;

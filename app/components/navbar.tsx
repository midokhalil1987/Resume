"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { GiCircleSparks } from "react-icons/gi";
import { RxHamburgerMenu, RxArrowRight } from "react-icons/rx";
import ArrowButton from "./arrowButton";
// import SwitchTheme from "./switchTheme";

interface Props {
  name: string;
  link: string;
}

const NavItem = (props: Props) => {
  return (
    <Link href={props.link} legacyBehavior>
      <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-bold items-center hover:text-black">
        {props.name}
      </a>
    </Link>
  );
};

// let window: {
//   scrollY: number;
//   addEventListener: (arg0: string, arg1: () => void) => void;
// };

const isBrowser = () => typeof window !== "undefined";

const Navbar: any = () => {
  const [active, setActive] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 25) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);

  const handleToggle = () => setActive(!active);

  //   const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
  //     useContext(SwitchTheme);

  //   function toggleThemeHandler(): void {
  //     themeCtx.toggleThemeHandler();
  //   }

  return (
    <>
      <div className="flex justify-start lg:justify-center p-3">
        <div
          className={`${
            fix ? "bg-slate-950/75 text-white" : "text-slate-500"
          } flex flex-wrap justify-between lg:fixed z-10 shadow-md backdrop-blur-sm transition-all duration-500 ease-in-out rounded-xl lg:rounded-full w-full lg:w-4/5 items-center bg-slate-100/50 p-3`}
        >
          <Link href="/" legacyBehavior>
            <div className="inline-flex items-center p-2">
              <GiCircleSparks size={35} className="mr-2 text-pink-500" />
              <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold uppercase tracking-wide">
                Resume
              </p>
            </div>
          </Link>
          <button
            onClick={handleToggle}
            className="transition duration-500 ease-in-out inline-flex p-3 hover:bg-pink-300 rounded-xl lg:hidden text-white ml-auto hover:text-white outline-none"
          >
            <RxHamburgerMenu className="w-6 h-6 text-pink-500" />
          </button>
          {/* <button
        type="button"
        className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded"
        onClick={toggleThemeHandler}
      >
        Toggle Theme
      </button> */}
          <div
            className={`${
              active ? "" : "hidden"
            } transition-all duration-500 ease-in-out flex w-full lg:inline-flex lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:items-center flex flex-col">
              <NavItem name="Home" link="/" />
              <NavItem name="Gallery" link="/gallery" />
              <NavItem name="Pricing" link="/" />
              <NavItem name="About us" link="/" />
              <NavItem name="Contact us" link="/" />
              <ArrowButton
                styleBtn="lg:hidden flex flex-row border-2 border-pink-500 p-3 rounded-full"
                name="Get Started"
                styleName="text-pink-500 font-bold"
                styleIcn="text-pink-500 w-6 h-6"
              />
            </div>
          </div>
          <ArrowButton
            styleBtn="lg:flex hidden flex-row border-2 border-pink-500 p-3 rounded-full"
            name={"Get Started"}
            styleName={"text-pink-500 font-bold"}
            styleIcn="text-pink-500 w-6 h-6"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

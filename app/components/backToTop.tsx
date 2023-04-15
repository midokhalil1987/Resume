"use client";
import { useEffect, useState } from "react";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";

type Props = {};

const isBrowser = () => typeof window !== "undefined";

const BackToTop = (props: Props) => {
  const [top, setTop] = useState(false);

  const setBackHandler = () => {
    if (window.scrollY > 500) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setBackHandler);
  }, []);

  const goTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <button onClick={goTop}>
        <TbSquareRoundedArrowUpFilled
          className={`${
            top ? "fixed" : "hidden"
          } bottom-12 right-12 h-12 w-12 text-pink-700/50 hover:text-pink-950/50 transition-all ease-in-out duration-300`}
        />
      </button>
    </>
  );
};

export default BackToTop;

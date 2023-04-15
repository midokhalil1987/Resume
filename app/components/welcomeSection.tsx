"use client";
import ArrowButton from "./arrowButton";
import DuplicateAvatars from "./duplicateAvatars";
const Zoom = require("@successtar/react-reveal/Zoom");
const Fade = require("@successtar/react-reveal/Fade");

type Props = {};

const WelcomeSection: React.FC = (props: Props) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-around space-y-4 lg:pt-16"
        id="welcomeSection"
      >
        <div className="flex flex-col text-center text-white lg:w-3/5 p-3">
          <Zoom cascade right>
            <h1 className="text-5xl lg:text-6xl font-bold py-4 transition-all duration-500 ease-in-out capitalize">
              Fusce tempor laoreet tellus, vitae.
            </h1>
          </Zoom>
          <Zoom right cascade>
            <h2 className="text-sm text-black lg:text-md lg:font-bold transition-all duration-500 ease-in-out capitalize">
              Ut commodo, nisl id iaculis faucibus, eros velit congue justo, ut
              semper.
            </h2>
          </Zoom>
        </div>
        <Fade duration={3000} delay={1000}>
          <ArrowButton
            styleBtn="flex flex-row bg-fuchsia-950 px-5 py-3 rounded-xl"
            name="Get Started"
            styleName="text-white text-sm"
            styleIcn="text-white w-5 h-5"
          />
        </Fade>
        <DuplicateAvatars />
        <Zoom right cascade>
          <p className="normal-case text-xs text-black">
            Morbi non ante lorem. Donec hendrerit.
          </p>
        </Zoom>
        <Fade>
          <div className="relative flex items-center blur-sm lg:w-8/12 p-3">
            <img src="/darkrange.png" alt="darkrange" className="rounded-xl" />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default WelcomeSection;

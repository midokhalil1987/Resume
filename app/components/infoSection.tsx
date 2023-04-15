import { BsArrowRight, BsStars } from "react-icons/bs";
import { GiFire, GiLightBulb } from "react-icons/gi";
import { TbWritingSign } from "react-icons/tb";
import InfoBox from "./infoBox";
import Link from "next/link";

type Props = {};

const InfoSection = (props: Props) => {
  return (
    <>
      <div className="flex justify-center py-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:w-4/5 w-full lg:space-x-3 px-3">
          <div className="lg:w-1/2 flex flex-col space-y-3 pb-5">
            <h1 className="text-2xl font-bold lg:text-4xl lg:font-extrabold">
              Nunc ullamcorper fermentum ex vitae
              <span className="text-purple-500"> Fusce Ipsum Utnisl</span>
            </h1>
            <p className="font-sm">
              Ghoncus elit. Nam scelerisque consequat lorem, quis fringilla
              ligula malesuada eu. Integer est.
            </p>
            <div className="flex flex-row p-3 shadow-md justify-between items-center rounded-xl">
              <p className="text-lg font-bold flex flex-row items-center">
                Maecenas euismod magna
                <BsStars className="text-purple-500 ml-2" />
              </p>
              <BsArrowRight />
            </div>
            <p>2M+ lorem epsom</p>
            <p>Eunc id interdum metus sollicitudin</p>
            <p>Work nulla rhoncus auctor quis sit amet mant</p>
          </div>
          <div className="lg:w-1/2 flex flex-col bg-slate-400/50 rounded-xl py-16 px-10">
            <InfoBox desc={"Nulla imperdiet fermentum"} rotate={"-rotate-6"}>
              <GiFire />
            </InfoBox>
            <InfoBox desc={"Nulla fermentum"} rotate={"rotate-6"}>
              <TbWritingSign />
            </InfoBox>
            <InfoBox desc={"imperdiet fermentum"} rotate={"-rotate-6"}>
              <GiLightBulb />
            </InfoBox>
          </div>
        </div>
      </div>
      {/* <Link href="/#welcomeSection" scroll={true}>
        <button>Go to</button>
      </Link> */}
    </>
  );
};

export default InfoSection;

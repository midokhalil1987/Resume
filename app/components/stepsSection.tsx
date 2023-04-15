"use client";
import { RxPencil2, RxRocket } from "react-icons/rx";
import { GiWallet } from "react-icons/gi";
import {
  TbGitBranchDeleted,
  TbGitCommit,
  TbMailOpened,
  TbSend,
} from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
import { BsFillPenFill } from "react-icons/bs";
import CountUp from "react-countup";
const Fade = require("@successtar/react-reveal/Fade");
import ArrowButton from "./arrowButton";
import StepBox from "./stepBox";

type Props = {};

const StepsSection = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-5 space-y-5">
        <Fade>
          <h1 className="text-black font-bold text-3xl">
            <span className="text-purple-800 underline decoration-wavy decoration-2">
              Etiam
            </span>{" "}
            posuere sit.
          </h1>
        </Fade>
        <Fade right>
          <StepBox style="bg-gradient-to-r from-pink-500 to-purple-500">
            <div className="flex flex-col items-start text-white py-10 pl-5 space-y-5 w-1/2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-200/50">
                <RxPencil2 />
              </div>
              <h3 className="font-bold text-xl">1.Vivamus suscipit</h3>
              <p className="text-sm">
                Nunc ullamcorper fermentum ex vitae sodales. Fusce in ipsum ut
                nulla rhoncus auctor quis sit amet mi. Fusce ac vestibulum
                turpis. Nunc id metus.
              </p>
              <ArrowButton
                styleBtn={
                  "flex flex-row justify-center items-center px-5 py-3 rounded-xl bg-white"
                }
                name={"Join Free"}
                styleName={"text-pink-500 text-sm"}
                styleIcn="text-pink-500 w-5 h-5"
              />
            </div>
            <div className="flex flex-col items-start text-black pt-5 w-1/2">
              <div className="pt-5 px-5 bg-slate-300/50 w-full h-full rounded-tl-xl rounded-br-xl space-y-5">
                <div className="border border-pink-300 bg-slate-300 shadow rounded-xl p-4 w-full">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row items-center">
                      <div className="animate-pulse rounded-full bg-slate-500 h-10 w-10 ring-2 ring-pink-500"></div>
                      <div className="flex-1 pl-2">
                        <p className=" font-bold">Joury & Jamila</p>
                      </div>
                    </div>
                    <div className="animate-pulse space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-500 rounded"></div>
                        <div className="w-3/4 h-2 bg-slate-500 rounded col-span-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-10">
                  <div className="bg-slate-300/50 rounded-xl p-4 max-w-sm w-full">
                    <div className="flex justify-between">
                      <div className="flex flex-col space-y-3 w-full">
                        <span>
                          $<CountUp end={897695786} duration={10} />
                        </span>
                        <p className="text-sm">Dolor sit amet</p>
                        <div className="h-2 bg-slate-400/50 rounded w-3/4">
                          <div className="h-2 bg-slate-500 rounded w-1/3"></div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <GiWallet className="text-black" />
                        <div className="invisible">1</div>
                        <p className="text-sm font-light">30%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StepBox>
        </Fade>
        <Fade left>
          <StepBox style={"bg-cyan-500"}>
            <div className="flex flex-col items-start text-black pt-5 w-1/2">
              <div className="pt-5 pr-5 bg-gradient-to-br md:bg-gradient-to-tl from-cyan-300/50 w-full h-full rounded-tr-xl rounded-bl-xl">
                <div className="flex flex-col py-5 px-3 bg-white w-full h-full rounded-tr-xl rounded-bl-xl space-y-5">
                  <input
                    placeholder="Ask me!"
                    className="border shadow-lg rounded-xl p-2 w-full"
                  />
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <SlBookOpen className="h-6 w-6 text-purple-400" />
                    <div className="flex flex-col">
                      <h2 className="font-bold">interdum metusrgf</h2>
                      <p className="text-sm font-light">
                        turpis. Nunc id interdum metusrgf get
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <BsFillPenFill className="h-6 w-6 text-purple-400" />
                    <div className="flex flex-col">
                      <h2 className="font-bold">
                        Integer quis ullamcorper est.
                      </h2>
                      <p className="text-sm font-light">
                        Integer quis ullamcorper est.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <TbMailOpened className="h-6 w-6 text-purple-400" />
                    <div className="flex flex-col">
                      <h2 className="font-bold">nulla rhoncus</h2>
                      <p className="text-sm font-light">
                        nulla rhoncus auctor quis sit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start text-white py-10 pr-5 space-y-5 w-1/2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-200/50">
                <TbSend />
              </div>
              <h3 className="font-bold text-xl">2.Vivus & Ouspit</h3>
              <p className="text-sm">
                Nunc ullamcorper fermentum ex vitae sodales. Fusce in ipsum ut
                nulla rhoncus auctor quis sit amet mi. Fusce ac vestibulum
                turpis. Nunc id metus.
              </p>
              <ArrowButton
                styleBtn={
                  "flex flex-row justify-center items-center px-5 py-3 rounded-xl bg-white"
                }
                name={"Join Free"}
                styleName={"text-cyan-500 text-sm"}
                styleIcn="text-cyan-500 w-5 h-5"
              />
            </div>
          </StepBox>
        </Fade>
        <Fade right>
          <StepBox style={"bg-gradient-to-r from-purple-900 to-blue-500"}>
            <div className="flex flex-col items-start text-white py-10 pl-5 space-y-5 w-1/2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-200/50">
                <RxRocket />
              </div>
              <h3 className="font-bold text-xl">3.Vivus & Ouspit</h3>
              <p className="text-sm">
                Nunc ullamcorper fermentum ex vitae sodales. Fusce in ipsum ut
                nulla rhoncus auctor quis sit amet mi. Fusce ac vestibulum
                turpis. Nunc id metus.
              </p>
              <ArrowButton
                styleBtn={
                  "flex flex-row justify-center items-center px-5 py-3 rounded-xl bg-white"
                }
                name={"Join Free"}
                styleName={"text-purple-900 text-sm"}
                styleIcn="text-purple-900 w-5 h-5"
              />
            </div>
            <div className="flex flex-col items-start text-black pt-5 w-1/2">
              <div className="pt-5 pl-5 bg-slate-300/50 w-full h-full rounded-tl-xl rounded-br-xl">
                <div className="flex flex-col py-5 px-3 bg-white w-full h-full rounded-tl-xl rounded-br-xl space-y-5">
                  <h4 className="font-bold capitalize">ritae consectetur</h4>
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-500 text-white flex justify-center items-center">
                      <TbGitBranchDeleted className="m-2" />
                    </div>
                    <p className="text-sm font-light">
                      turpis. Nunc id interdum metusrgf get
                    </p>
                  </div>
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-500 text-white flex justify-center items-center">
                      <TbGitCommit className="m-2" />
                    </div>
                    <p className="text-sm font-light">
                      Integer quis ullamcorper est.
                    </p>
                  </div>
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-500 text-white flex justify-center items-center">
                      <TbGitCommit className="m-2" />
                    </div>
                    <p className="text-sm font-light">
                      nulla rhoncus auctor quis sit
                    </p>
                  </div>
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-500 text-white flex justify-center items-center">
                      <TbSend className="m-2" />
                    </div>
                    <p className="text-sm font-light">
                      turpis. Nunc id interdum metuset
                    </p>
                  </div>
                  <div className="flex flex-row pl-3 space-x-3 items-center">
                    <div className="h-6 w-10 rounded-full bg-slate-200 text-purple-500 flex justify-center items-center">
                      <p className="text-sm">more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StepBox>
        </Fade>
      </div>
    </>
  );
};

export default StepsSection;

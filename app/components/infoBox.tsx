import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  desc: string;
  rotate?: string;
};

const InfoBox = (props: Props) => {
  const { rotate, desc, children } = props;
  return (
    <>
      <div className={`bg-slate-100 shadow-lg rounded-xl p-4 w-full ${rotate}`}>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center">
            {children}
            <div className="flex-1 pl-2">
              <p className=" font-bold">{desc}</p>
            </div>
          </div>
          <div className="animate-pulse space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-2 bg-slate-500 rounded col-span-2"></div>
              <div className="h-2 bg-slate-500 rounded"></div>
              <div className="w-3/4 h-2 bg-slate-500 rounded col-span-1"></div>
              <div className="h-2 bg-slate-500 rounded col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBox;

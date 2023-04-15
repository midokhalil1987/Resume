type Props = {
  children: any;
  style: string;
};

const StepBox = (props: Props) => {
  return (
    <>
      <div className="px-3 flex justify-center">
        <div
          className={`flex justify-between space-x-10 pt-10 w-full lg:max-w-screen-md ${props.style} rounded-xl`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default StepBox;

type Props = {};

const SubscribeSection = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 px-3 rounded-xl">
        <div className="w-full lg:w-4/5 bg-slate-200/50 flex justify-center items-center rounded-xl">
          <div className="py-10 lg:w-3/5 space-y-3 px-3">
            <p className="text-center text-xl font-bold">
              Bommodo porttitor quam eget, volutpat sodales sem, malesuada.
            </p>
            <p className="text-center">
              Dtiam ornare semper eleifend. Aenean cursus sollicitudin tellus
              maximus bibendum, ultrices!
            </p>
            <div className="flex flex-row justify-center items-center space-x-2">
              <input
                placeholder="Email Address"
                className="rounded-xl p-2 w-3/5 border"
                type="Email"
              />
              <button className="bg-purple-500 rounded-xl md:w-1/4 p-2 text-white hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeSection;

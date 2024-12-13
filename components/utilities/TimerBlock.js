export default function TimerBlock({ value, details }) {
  return (
    <div className="bg-white bg-opacity-35 shadow-soft-sakura rounded-lg px-3 md:px-4 lg:px-5">
      <div className="flex-col justify-center items-center inline-flex">
        <div className="p-2.5 md:p-3 lg:p-4 flex-col justify-start items-start gap-2.5 flex">
          <div className="text-sakura-100 text-xl md:text-2xl lg:text-3xl font-extrabold font-comfortaa leading-[30px] md:leading-[36px] lg:leading-[42px]" suppressHydrationWarning>
            {value}
          </div>
        </div>
        <div className="p-2.5 md:p-3 lg:p-4 justify-start items-start gap-2.5 inline-flex">
          <div className="text-sakura-100 text-sm md:text-base lg:text-lg font-medium font-comfortaa leading-[18px] md:leading-[21px] lg:leading-[24px]">
            {details}
          </div>
        </div>
      </div>
    </div>
  );
}
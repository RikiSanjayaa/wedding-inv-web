import CustomFilledBtn from "./CustomFilledBtn";

export default function MapCard({ title, time, place, address, bgImageUrl, iconUrl, mapUrl }) {
  const handleClick = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div
      className="h-max w-full relative bg-cover bg-center py-16 px-12 rounded-lg md:rounded-xl lg:rounded-2xl shadow-soft-sakura"
      style={{ backgroundImage: `url(${bgImageUrl})`, backgroundSize: "300%" }}
    >
      {/* Dark Filter */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg md:rounded-xl lg:rounded-2xl"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center gap-10 md:gap-12 lg:gap-14">
        <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-7">
          <img src={iconUrl} width={45} />
          <div className="text-white text-center text-[25px] md:text-[30px] lg:text-[35px] font-medium font-['Comfortaa'] leading-[30px] md:leading-[36px] lg:leading-[42px]">
            {title}
          </div>
        </div>
        <div className="text-white text-xl md:text-2xl lg:text-3xl font-['Comfortaa'] leading-normal md:leading-relaxed lg:leading-loose">
          {time}
        </div>
        <div className="text-white text-[25px] md:text-[30px] lg:text-[35px] font-['Comfortaa'] leading-[30px] md:leading-[36px] lg:leading-[42px] text-center">
          {place}
        </div>
        <div className="w-[243px] text-white text-center text-[13px] md:text-[15px] lg:text-[17px] font-medium font-['Comfortaa'] leading-none md:leading-tight lg:leading-snug">
          {address}
        </div>
        <CustomFilledBtn buttonText="Open Map" width="w-full" onClick={handleClick} />
      </div>
    </div>
  );
}
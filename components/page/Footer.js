export default function Footer() {
  return (
    <div className="relative inset-0 bg-cover bg-center h-44 md:h-60 lg:h-80" style={{ backgroundImage: 'url(/images/landing_img.png)' }}>
      {/* Overlay hitam dengan kecerahan 5 */}
      <div className="absolute inset-0 bg-black opacity-5"></div>

      <div className="h-full w-full flex-col justify-center items-center gap-[50px] md:gap-[60px] 2xl:gap-[70px] inline-flex relative z-10">
        <div className="w-[25px] h-[25px] relative">
          <div className="w-[9px] h-[9px] left-[8px] top-[8px] absolute flex-col justify-start items-center gap-px inline-flex">
            <div className="flex-col justify-start items-center flex" />
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="h-14 px-[90px] rounded-[10px] border border-white justify-center items-center gap-2.5 inline-flex">
            <div className="h-14 p-2.5 justify-center items-center gap-2.5 flex">
              <div className="w-[61px] text-white text-3xl font-normal font-['Allura'] leading-9">Asep</div>
            </div>
          </div>
          <div className="w-[30px] h-1 bg-white rounded-[20px] absolute" />
          <div className="h-14 px-[90px] rounded-[10px] border border-white justify-center items-center gap-2.5 inline-flex">
            <div className="h-14 p-2.5 justify-center items-center gap-2.5 flex">
              <div className="w-[60px] text-white text-3xl font-normal font-['Allura'] leading-9">Putri</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

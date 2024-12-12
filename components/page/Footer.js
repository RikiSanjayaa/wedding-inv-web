export default function Footer() {
    return (
      <div className="relative inset-0 bg-cover bg-center h-44 md:h-60 lg:h-80" style={{ backgroundImage: 'url(/images/landing_img.png)' }}>
        {/* Overlay hitam dengan kecerahan 5 */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
  
        <div className="h-full w-full flex-col justify-center items-center gap-[50px] md:gap-[60px] 2xl:gap-[70px] inline-flex relative z-10">
          <div className="w-[25px] h-[25px] relative">
            <div className="w-[9px] h-[9px] left-[8px] top-[8px] absolute flex-col justify-start items-center gap-px inline-flex">
              <div className="flex-col justify-start items-center flex" />
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
            </div>
          </div>
  
          <div className="flex-col justify-start items-center gap-[25px] flex">
            <div className="w-[400.72px] h-14 relative">
              <div className="w-[136.53px] h-14 px-[90px] left-0 top-0 absolute rounded-[10px] border border-white justify-center items-center gap-2.5 inline-flex">
                <div className="h-14 p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="w-[61px] text-white text-3xl font-normal font-['Allura'] leading-9">Asep</div>
                </div>
              </div>
              <div className="w-[134.87px] h-14 px-[90px] left-[200.86px] top-0 absolute rounded-[10px] border border-white justify-center items-center gap-2.5 inline-flex">
                <div className="h-14 p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="w-[60px] text-white text-3xl font-normal font-['Allura'] leading-9">Putri</div>
                </div>
              </div>
              <div className="w-[11px] h-1 left-[133.03px] top-[26px] absolute bg-white rounded-[20px]" />
            </div>
  
            <div className="self-stretch grow shrink basis-0 justify-start items-center inline-flex">
              <div className="grow shrink basis-0 p-2.5 flex-col justify-start items-start gap-2.5 inline-flex" />
              <div className="w-[350.62px] h-5 relative">
                <div className="w-5 h-5 left-[7.81px] top-[-0px] absolute" />
                <div className="w-[12.50px] h-[12.50px] left-[23.12px] top-[7.50px] absolute" />
                <div className="w-[12.50px] h-[12.50px] left-[-0px] top-[7.19px] absolute" />
              </div>
              <div className="grow shrink basis-0 p-2.5 flex-col justify-start items-start gap-2.5 inline-flex" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
import Image from 'next/image';

export default function LandingPage({ togglePlay }) {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
    togglePlay();
  }

  return (
    <div className="relative inset-0 bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/landing_img.png)' }}>
      <div className="h-full w-full flex-col justify-center items-center gap-[50px] md:gap-[60px] 2xl:gap-[70px] inline-flex">
        <div className="flex-col justify-start items-center gap-[50px] md:gap-[60px] 2xl:gap-[70px] flex">
          <div className="flex-col justify-start items-center gap-[50px] md:gap-[60px] 2xl:gap-[70px] flex">
            <div className="flex-col justify-start items-center gap-[50px] md:gap-[60px] 2xl:gap-[70px] flex">
              <div className="h-[91px] flex-col justify-center items-center flex">
                <div className="p-2.5 justify-start items-start gap-2.5 md:gap-3 2xl:gap-4 inline-flex">
                  <div className="text-center text-white text-base md:text-lg 2xl:text-xl font-bold font-['Comfortaa'] leading-tight">
                    Ya Allah the Most Loving
                  </div>
                </div>
                <div className="p-2.5 justify-center items-center gap-2.5 md:gap-3 2xl:gap-4 inline-flex">
                  <div className="w-[374px] md:w-[450px] 2xl:w-[520px] text-center text-[#e6e6e6] text-[13px] md:text-[15px] 2xl:text-[17px] font-medium font-['Comfortaa'] leading-none">
                    With Your blessing, you brought us together in a holy marriage bond
                  </div>
                </div>
              </div>
              <div className="p-2.5 justify-start items-start gap-[50px] md:gap-[60px] 2xl:gap-[70px] inline-flex">
                <div className="text-center text-white text-xl md:text-2xl 2xl:text-3xl font-bold font-['Comfortaa'] leading-normal">
                  THE WEDDING OF
                </div>
              </div>
            </div>
            <div className="p-2.5 justify-start items-center gap-2.5 md:gap-3 2xl:gap-4 inline-flex">
              <Image priority src="/svg/name_decor.svg" alt='name decor' width={20} height={10} />
              <div className="text-center text-white text-6xl md:text-7xl 2xl:text-8xl font-normal font-['Allura'] leading-[72px]">
                Asep & Putri
              </div>
              <Image priority src="/svg/name_decor.svg" alt='name decor' width={20} height={10} className="transform scale-x-[-1]" />
            </div>
          </div>
          <div className="p-2.5 justify-center items-center gap-6 md:gap-8 2xl:gap-10 flex">
            <div className="h-px w-20 bg-white"></div>
            <div className="text-center text-white text-[15px] md:text-[17px] 2xl:text-[19px] font-medium font-['Comfortaa']">
              25 01 2025
            </div>
            <div className="h-px w-20 bg-white"></div>
          </div>
          <button onClick={handleScroll} className="bg-sakura-300 text-white p-4 rounded-full shadow-soft-sakura animate-pulse-grow-shrink hover:animate-none transform hover:scale-110 transition-all duration-300">
            <img src="/images/scroll_btn.png" alt="Scroll Down" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
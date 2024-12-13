import CustomFilledBtn from "../utilities/CustomFilledBtn";
import OneProfile from "../utilities/OneProfile";

export default function CoupleCard() {
  const handleScrollToStory = () => {
    document.getElementById("story").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="transform -translate-y-20 m-10 h-max w-full px-[20px] md:px-[30px] lg:px-[40px] py-[50px] bg-white rounded-[10px] shadow-soft-sakura justify-center items-center gap-2.5 md:gap-3 lg:gap-3.5 inline-flex">
      <div className="flex-col justify-start items-center gap-[50px] inline-flex">
        <div className="flex-col justify-center items-center flex">
          <div className="self-stretch p-2.5 justify-center items-center gap-2.5 md:gap-3 lg:gap-3.5 inline-flex">
            <div className="grow shrink basis-0 text-center text-sakura-300 text-[25px] md:text-[27px] lg:text-[30px] font-bold font-['Comfortaa'] leading-[30px]">
              Pasangan Mempelai
            </div>
          </div>
          <div className="py-5 px-10 justify-center items-center gap-2.5 md:gap-3 lg:gap-3.5 inline-flex">
            <div className="grow shrink basis-0 text-center text-[#999999] text-[13px] md:text-[15px] lg:text-[17px] font-medium font-['Comfortaa'] leading-none w-full md:w-[600px] lg:w-[800px]">
              Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, Ya Allah izinkanlah kami merangkaikan cinta yang Engkau berikan dalam ikatan pernikahan.
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-[80px] flex md:flex-row">
            <OneProfile imageSrc="/images/mempelai_pria.jpg" nama="Asep Irawan" dari="Putra dari" orangTua="Bapak H. B. Hermanto, S.Pd., M.B.A. danIbu Hj. Fatmah, S.Pd, SD." />
            <OneProfile imageSrc="/images/mempelai_wanita.jpg" nama="Putri Amanda" dari="Putri dari" orangTua="Bapak Pelda Laluu Juanda & Ibu Megawati Silaen" />
          </div>
        </div>
        <CustomFilledBtn buttonText="Our Story" onClick={handleScrollToStory} />
      </div>
    </div>
  )
}
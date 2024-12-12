import { FacebookBtn, InstagramBtn, TwitterBtn } from "./SosmedBtn";


export default function OneProfile({ imageSrc, nama, dari, orangTua }) {
  return (
    <div className="h-[500px] flex-col justify-center items-center  flex">
      <div className="flex-col justify-start items-center flex">
        <div className="w-[250px] h-[280px] relative">
          <div className="w-[245px] h-[245px] top-0.5 m-auto left-0 right-0 absolute">
            <div className="w-[245px] h-[245px] left-0 bottom-0 absolute bg-[#d9d9d9] rounded-full">
              <img src={imageSrc} className="rounded-full w-full h-full object-cover" />
            </div>
          </div>
          <img src="/images/profile_decor.png" className="absolute bottom-0 m-auto left-0 right-0"></img>
          <div className="w-[250px] h-[250px] left-0 top-0 absolute rounded-full border-[4px] border-[#ffcbe1]" />
        </div>
        <div className="p-2.5 justify-start items-start gap-2.5 inline-flex">
          <div className="h-12 pb-4 justify-center items-center flex">
            <div className="h-8 text-center text-[#ff337c] text-[40px] md:text-[45px] lg:text-[50px] font-normal font-['Allura'] leading-[48px]">
              {nama}
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-center gap-2.5 flex">
            <div className="w-[76px] text-center text-[#4c4c4c] text-[13px] font-light font-['Comfortaa'] leading-none">
              {dari}
            </div>
            <div className="w-[260px] text-center text-[#4c4c4c] text-[13px] font-bold font-['Comfortaa'] leading-none">
              {orangTua}
            </div>
          </div>
          <div className="justify-start items-start gap-5 inline-flex">
            <InstagramBtn color="text-sakura-300" url="https://www.instagram.com/" />
            <TwitterBtn color="text-sakura-300" url="https://www.instagram.com/" />
            <FacebookBtn color="text-sakura-300" url="https://www.facebook.com/" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Footer() {
    const handleScroll = () => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }

    return (
        <div className="relative h-[325px] flex flex-col justify-start items-center gap-[100px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/landing_img.png)", // Ganti dengan URL gambar
          }}
        ></div>
      
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
      
        {/* Konten */}
        <div className="relative flex flex-col justify-start items-center gap-[100px]">
          <div className="w-[50px] h-[50px] relative">
            <div className="absolute left-[16px] top-[16px] flex flex-col justify-start items-center gap-px">
              <div className="flex flex-col justify-start items-center"></div>
              <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="w-[1000px] h-[175px] relative">
            {/* Nama Asep */}
            <div className="absolute top-0 left-[78px] h-[92px] px-[140px] rounded-[20px] border-2 border-white flex justify-center items-center">
              <div className="h-[92px] p-2.5 flex justify-center items-center">
                <div className="text-white text-6xl font-normal font-['Allura'] leading-[72px]">Asep</div>
              </div>
            </div>
      
            {/* Nama Putri */}
            <div className="absolute top-0 left-[501px] h-[92px] px-[140px] rounded-[20px] border-2 border-white flex justify-center items-center">
              <div className="h-[92px] p-2.5 flex justify-center items-center">
                <div className="text-white text-6xl font-normal font-['Allura'] leading-[72px]">Putri</div>
              </div>
            </div>
      
            {/* Dekorasi */}
            <div className="absolute top-[111px] left-0 w-[1000px] h-16 flex justify-start items-center">
              <div className="grow shrink basis-0 p-2.5 flex flex-col justify-start items-start gap-2.5"></div>
              <div className="relative w-[114px] h-16">
                <div className="absolute top-0 left-[25px] w-16 h-16"></div>
                <div className="absolute top-[24px] left-[74px] w-10 h-10"></div>
                <div className="absolute top-[23px] left-0 w-10 h-10"></div>
              </div>
              <div className="grow shrink basis-0 p-2.5 flex flex-col justify-start items-start gap-2.5"></div>
            </div>
      
            {/* Garis Dekorasi */}
            <div className="absolute top-[41px] left-[477px] w-[34px] h-2.5 bg-white rounded-[20px]"></div>
          </div>
        </div>
      </div>      
    )





}
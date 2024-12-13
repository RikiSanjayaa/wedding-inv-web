import Breakpoints2 from "../utilities/Breakpoints2";

export default function Footer() {
  return (
    <div
      className="relative inset-0 bg-cover bg-center h-44 md:h-60 lg:h-80"
      style={{ backgroundImage: 'url(/images/landing_img.png)' }}
    >
      {/* Overlay hitam dengan kecerahan 5 */}
      <div className="absolute inset-0 bg-black opacity-5"></div>

      {/* Konten Utama Footer */}
      <div className="h-full w-full flex flex-col justify-center items-center gap-6 relative z-10">
        {/* Bagian Nama dan Garis */}
        <div className="flex items-center gap-4">
          {/* Nama Kiri */}
          <div className="px-8 py-3 rounded-[10px] border border-white">
            <div className="text-white text-3xl font-normal font-['Allura'] leading-9">
              Asep
            </div>
          </div>

          {/* Garis Tengah */}
          <div className="h-1 w-8 bg-white rounded-full"></div>

          {/* Nama Kanan */}
          <div className="px-8 py-3 rounded-[10px] border border-white">
            <div className="text-white text-3xl font-normal font-['Allura'] leading-9">
              Putri
            </div>
          </div>
        </div>

        {/* Garis Sakura */}
        <Breakpoints2 />
      </div>

      {/* Gambar Pembuat Web */}
      <div className="flex justify-center mt-4">
        <img 
          src="/images/depelover.jpg" 
          alt="Foto Pembuat Web" 
          className="max-w-full h-auto rounded-lg" 
        />
      </div>
    </div>
  );
}

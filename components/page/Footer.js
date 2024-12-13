export default function Footer() {
  return (
    <div 
      className="relative inset-0 bg-cover bg-center h-44 md:h-60 lg:h-80" 
      style={{ backgroundImage: 'url(/images/landing_img.png)' }}>
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="h-full w-full flex flex-col justify-center items-center gap-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center px-10 py-2 border border-white rounded-lg">
            <div className="text-white text-3xl font-normal font-['Allura']">Asep</div>
          </div>
          <div className="w-4 h-1 bg-white rounded-full"></div>
          <div className="flex items-center justify-center px-10 py-2 border border-white rounded-lg">
            <div className="text-white text-3xl font-normal font-['Allura']">Putri</div>
          </div>
        </div>
        <div className="w-[300px] h-1 bg-transparent"></div>
      </div>
    </div>
  );
}

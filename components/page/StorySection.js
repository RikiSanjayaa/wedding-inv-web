import Heading from "../utilities/Heading";

export default function StorySection() {
  return (
    <div className="flex flex-col pt-12 md:pt-20">
      <Heading text="Our Story" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row py-12 md:py-20 gap-12 md:gap-16 xl:gap-20 2xl:gap-24 items-center">
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-soft-sakura transform transition duration-500 hover:scale-105 md:order-1">
          <img className="w-full h-full object-cover" src="/images/mempelai_pria_kotak.jpg" />
        </div>
        <div className="p-10 w-full bg-white rounded-lg overflow-hidden shadow-soft-sakura transform transition duration-500 hover:scale-105 flex items-center flex-col justify-center gap-5 md:order-2">
          <text className="font-bold text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">Agustus, 2020</text>
          <text className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">
            Kisah kami dimulai di sebuah kampus ternama saat kami pertama kali bertemu dalam kegiatan orientasi mahasiswa. Tika, mahasiswa Psikologi, dan Anugrah, mahasiswa Teknik, saling berkenalan secara singkat. Tak lama setelahnya, kami dipertemukan kembali dalam proyek kolaborasi antar fakultas, yang membuat kami semakin dekat. Pada Maret 2022, kami memutuskan untuk menjalin hubungan yang lebih serius, saling mendukung dan menjalani perjalanan kuliah bersama.
          </text>
        </div>
        <div className="w-full bg-white rounded-lg overflow-hidden shadow-soft-sakura transform transition duration-500 hover:scale-105 md:order-4">
          <img className="w-full h-full object-cover" src="/images/mempelai_wanita_kotak.jpg" />
        </div>
        <div className="p-10 w-full bg-white rounded-lg overflow-hidden shadow-soft-sakura transform transition duration-500 hover:scale-105 flex items-center flex-col justify-center gap-5 md:order-3">
          <text className="font-bold text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">Agustus, 2020</text>
          <text className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">
            Kisah kami dimulai di sebuah kampus ternama saat kami pertama kali bertemu dalam kegiatan orientasi mahasiswa. Tika, mahasiswa Psikologi, dan Anugrah, mahasiswa Teknik, saling berkenalan secara singkat. Tak lama setelahnya, kami dipertemukan kembali dalam proyek kolaborasi antar fakultas, yang membuat kami semakin dekat. Pada Maret 2022, kami memutuskan untuk menjalin hubungan yang lebih serius, saling mendukung dan menjalani perjalanan kuliah bersama.
          </text>
        </div>
      </div>
    </div >
  )
}

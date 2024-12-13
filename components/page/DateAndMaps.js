import Heading from "../utilities/Heading";
import MapCard from "../utilities/MapCard";
import TimerBlock from "../utilities/TimerBlock";

export default function DateAndMaps() {
  return (
    <div className="flex flex-col py-12 md:py-20 gap-12 md:gap-16 xl:gap-20 2xl:gap-24 items-center">
      <Heading text="Waktu & Tempat Pernikahan" />
      <text className="font-allura text-center text-netral-300 font-normal text-2xl md:text-3xl xl:text-4xl">
        Assalamualaikum Warrohmatullah Wabarrakatuhu
      </text>
      <text className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">
        By asking for the grace and blessing of Allah SWT. We intend to hold a wedding celebration for our sons and daughters, which Allah SWT willing will be held on:
      </text>
      <text className="leading-4 text-center text-netral-500 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">25 January 2025</text>
      <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-center">
        {/* tempat timer */}
        <TimerBlock value={21} details="D" />
        <TimerBlock value="06" details="H" />
        <TimerBlock value={50} details="M" />
        <TimerBlock value={28} details="S" />
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <MapCard
          title="Wedding Ceremony"
          time="07.00 - 08.00"
          place="Islamic Centre"
          address="Jl. Udayana, Gomong, Kec. Selaparang, Kota Mataram, Nusa Tenggara Bar."
          iconUrl="/images/wedding-ring.png"
          bgImageUrl="/images/map-card1.jpeg"
          mapUrl="https://www.google.com/maps/place/Masjid+Raya+Hubbul+Wathan+-+Islamic+Center+NTB/@-8.5799593,116.0980343,17z/data=!3m1!4b1!4m6!3m5!1s0x2dcdc09aed999edd:0x3bc68fa9a57918a3!8m2!3d-8.5799646!4d116.1006092!16s%2Fg%2F11cn5r3pkl?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
        />
        <MapCard
          title="Wedding Party"
          time="11.00 - 14.00"
          place="Prime Park Hotel"
          address="Jl. Udayana, Monjok, Kec. Selaparang, Kota Mataram, Nusa Tenggara Bar."
          iconUrl="/images/dinner-table.png"
          bgImageUrl="/images/map-card2.jpeg"
          mapUrl="https://www.google.com/maps/place/Prime+Park+Hotel+%26+Convention+Lombok/@-8.5764803,116.1000949,17z/data=!3m1!4b1!4m9!3m8!1s0x2dcdc090656cb3b3:0x97c7983c1f1bf06c!5m2!4m1!1i2!8m2!3d-8.5764856!4d116.1026698!16s%2Fg%2F11g873xmbs?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <text className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">
        It is an honor and happiness for us if Mr / Ms / Brother (i) is willing to attend to give blessings to the bride and groom.
      </text>
    </div>
  )
}
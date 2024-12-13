import { useEffect, useState } from "react";
import Heading from "../utilities/Heading";
import MapCard from "../utilities/MapCard";
import TimerBlock from "../utilities/TimerBlock";

export default function DateAndMaps() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("January 25, 2025 07:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="flex flex-col py-12 md:py-20 gap-12 md:gap-16 xl:gap-20 2xl:gap-24 items-center">
      <Heading text="Waktu & Tempat Pernikahan" />
      <p className="font-allura text-center text-netral-300 font-normal text-2xl md:text-3xl xl:text-4xl">
        Assalamualaikum Warrohmatullah Wabarrakatuhu
      </p>
      <p className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">
      Pernikahan adalah ibadah, dan setiap ibadah bermuara pada cinta-Nya sebagai tujuan. Sudah sewajarnya setiap upaya meraih cinta-Nya dilakukan dengan sukacita.
      </p>
      <p className="leading-4 text-center text-netral-500 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">25 January 2025</p>
      <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-center">
        <TimerBlock value={formatTime(timeLeft.days)} details="D" />
        <TimerBlock value={formatTime(timeLeft.hours)} details="H" />
        <TimerBlock value={formatTime(timeLeft.minutes)} details="M" />
        <TimerBlock value={formatTime(timeLeft.seconds)} details="S" />
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <MapCard
          title="AKAD"
          time="07.00 - 09.00"
          place="Islamic Centre"
          address="Jl. Udayana, Gomong, Kec. Selaparang, Kota Mataram, Nusa Tenggara Bar."
          iconUrl="/images/wedding-ring.png"
          bgImageUrl="/images/map-card1.jpeg"
          mapUrl="https://www.google.com/maps/place/Masjid+Raya+Hubbul+Wathan+-+Islamic+Center+NTB/@-8.5799593,116.0980343,17z/data=!3m1!4b1!4m6!3m5!1s0x2dcdc09aed999edd:0x3bc68fa9a57918a3!8m2!3d-8.5799646!4d116.1006092!16s%2Fg%2F11cn5r3pkl?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
        />
        <MapCard
          title="RESEPSI"
          time="11.00 - 14.00"
          place="Prime Park Hotel"
          address="Jl. Udayana, Monjok, Kec. Selaparang, Kota Mataram, Nusa Tenggara Bar."
          iconUrl="/images/dinner-table.png"
          bgImageUrl="/images/map-card2.jpeg"
          mapUrl="https://www.google.com/maps/place/Prime+Park+Hotel+%26+Convention+Lombok/@-8.5764803,116.1000949,17z/data=!3m1!4b1!4m9!3m8!1s0x2dcdc090656cb3b3:0x97c7983c1f1bf06c!5m2!4m1!1i2!8m2!3d-8.5764856!4d116.1026698!16s%2Fg%2F11g873xmbs?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
      <p className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl">
      suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara(i) berkenan hadir untuk memberikan berkat kepada kedua mempelai..
      </p>
    </div>
  )
}
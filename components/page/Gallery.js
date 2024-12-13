import Heading from "../utilities/Heading";

export default function Gallery() {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
  ];

  return (
    <div className="flex flex-col items-center py-12 md:py-20">
      <Heading text="Gallery" />
      <div class="pt-12 md:pt-20 lg-pt-32 grid grid-cols-2 gap-4 md:gap-8 lg:gap-12">
        <div class="grid gap-4 md:gap-8 lg:gap-12">
          <div>
            <img class="h-auto max-w-full rounded-lg shadow-soft-sakura" src={images[0]} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg shadow-soft-sakura" src={images[1]} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg shadow-soft-sakura" src={images[2]} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg shadow-soft-sakura" src={images[3]} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg shadow-soft-sakura" src={images[4]} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg shadow-soft-sakura" src={images[5]} alt="" />
          </div>
        </div>
      </div>
      <p className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl pt-20">
        “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapatkan ketenangan hati dan Dia menjadikan kasih sayang dan belas kasihan di antara kalian. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
      </p>
      <p className="text-center text-netral-600 text-base md:text-lg xl:text-xl 2xl:text-2xl pt-5">
        - AR-RUM 21 -
      </p>
    </div>
  );
}
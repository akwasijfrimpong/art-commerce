import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero relative  w-screen h-screen flex items-center justify-center">
      <div className="overlay absolute bg-black w-[100%] h-[100%] -z-10 opacity-40"></div>
      <Image
        src="/art.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="absolute -z-20"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-white font-bold text-[70px]">
          All Your Art Needs In One Place
        </h1>
        <div className="w-[500px] flex justify-evenly pt-24">
          <button className="w-[100px] h-[50px] bg-red-800 text-white font-bold rounded">
            Publish Art
          </button>
          <button className="w-[100px] h-[50px] bg-blue-800 text-white font-bold rounded">
            Explore Art
          </button>
        </div>
      </div>
    </div>
  );
}

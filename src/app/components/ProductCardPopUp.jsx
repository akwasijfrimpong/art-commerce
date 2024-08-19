import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductCardPopUp({ content, handleClosingPopup }) {
  const [displayedContent, setDisplayedContent] = useState(content);

  useEffect(() => {
    console.log(content);
    setDisplayedContent(content);
  }, [content]);
  return (
    <div className="relative w-screen h-screen flex justify-center z-50">
      <div className="w-screen h-[1600px] bg-black absolute left-0 opacity-95"></div>
      <div className="bg-white w-[1000px] h-[auto] z-50 rounded-xl flex flex-col items-center mt-[50px]">
        <div className="w-[100%]">
          {" "}
          <button
            className="font-bold text-gray-500 p-4"
            onClick={handleClosingPopup}
          >
            {" "}
            X{" "}
          </button>
        </div>

        <div className="flex pt-6 w-[100%] pb-5 gap-10 justify-center">
          <p className="font-bold text-[24px]">Title of Art</p>
        </div>
        {/* <iframe
          src={displayedContent}
          alt="vid"
          height={500}
          className="flex flex-col max-h-[500px] "
          onClick={() => {
            console.log(displayedContent);
          }}
        /> */}
        <video width="100%" height="auto" controls loop autoPlay muted>
          <source src={displayedContent} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="pt-2">Art by : Steve</p>
        <div className="flex gap-10 pt-5">
          <button className="font-bold text-white bg-blue-900 w-[150px] h-[40px] rounded-xl">
            Add To Cart
          </button>
          <button className="font-bold text-white bg-red-900 w-[150px] h-[40px] rounded-xl">
            Like
          </button>
        </div>
        <div className="pt-10 w-[100%]">
          <p className="font-bold pl-10 text-[24px]">More Like This </p>
        </div>
      </div>
    </div>
  );
}

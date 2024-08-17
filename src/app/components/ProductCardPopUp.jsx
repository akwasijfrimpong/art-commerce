import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductCardPopUp({ content }) {
  const [displayedContent, setDisplayedContent] = useState(content);

  useEffect(() => {
    console.log(content);
    setDisplayedContent(content);
  }, [content]);
  return (
    <div className="relative w-screen h-screen flex justify-center items-center z-50">
      <div className="w-screen h-[1200px] bg-black absolute left-0 opacity-75"></div>
      <div className="bg-white w-[1000px] h-[650px] z-50 rounded-xl">
        <img
          src={displayedContent}
          alt="vid"
          height={500}
          className="flex flex-col w-[320px] rounded"
          onClick={() => {
            console.log(displayedContent);
          }}
        />
      </div>
    </div>
  );
}

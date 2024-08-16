"use client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const HomeCardOne = () => {
  const [listOfVidImages, setListOfVidImages] = useState([]);

  useEffect(() => {
    const popularVids = fetch("https://api.pexels.com/videos/popular", {
      headers: {
        Authorization:
          "ZFec6hZe2wRdP4WN2uHMPwezn5ExJYxpxPieXBqFxumxTRYInrQ4YhkY",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Akwasi");
        }
        console.log(popularVids, "popularVids");
        return res.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data.videos), "data");
        const popularVidImage = data.videos.map((video) => video.image);
        setListOfVidImages(popularVidImage);
        console.log(popularVidImage, "popularVidImage");
      })
      .catch((error) => {
        console.log("there wwas an errors");
      });
  }, []);

  return (
    <div className="h-screen w-screen pt-6  bg-white">
      <div className="flex justify-center gap-6 flex-col items-center">
        <h1 className="font-bold text-[32px]">Explore</h1>
        <div className="flex gap-7">
          <button className=" bg-black rounded-full text-white w-[150px] h-[40px] border-b-2 border-b-w">
            Popular Videos
          </button>{" "}
          <button className="bg-white border-[2px] w-[150px] h-[40px] text-black rounded-full">
            {" "}
            Popular Photos
          </button>
        </div>
        <ProductCard popularVids={listOfVidImages} />
      </div>
    </div>
  );
};

export default HomeCardOne;

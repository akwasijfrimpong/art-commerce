"use client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const HomeCardOne = () => {
  const [listOfVidImages, setListOfVidImages] = useState([]);
  const [listOfImages, setListOfImages] = useState([]);
  const [showVid, setShowVid] = useState(true);

  useEffect(() => {
    const fetchPopularVideos = async () => {
      try {
        const res = await fetch("https://api.pexels.com/videos/popular", {
          headers: {
            Authorization:
              "ZFec6hZe2wRdP4WN2uHMPwezn5ExJYxpxPieXBqFxumxTRYInrQ4YhkY",
          },
        });

        if (!res.ok) {
          throw new Error("Error fetching popular videos");
        }

        const data = await res.json();
        const popularVidImage = data.videos.map((video) => {
          return {
            image: video.image,
            id: video.id,
          };
        });
        setListOfVidImages(popularVidImage);
      } catch (error) {
        console.log("There was an error fetching popular videos:", error);
      }
    };

    fetchPopularVideos();
  }, []);

  useEffect(() => {
    const fetchPopularPhotos = async () => {
      try {
        const res = await fetch("https://api.pexels.com/v1/curated", {
          headers: {
            Authorization:
              "ZFec6hZe2wRdP4WN2uHMPwezn5ExJYxpxPieXBqFxumxTRYInrQ4YhkY",
          },
        });

        if (!res.ok) {
          throw new Error("Error fetching popular photos");
        }

        const data = await res.json();
        const popularImage = data.photos.map((photo) => {
          return { image: photo.src.large, id: photo.id };
        });
        setListOfImages(popularImage);
      } catch (error) {
        console.log("There was an error fetching popular photos:", error);
      }
    };

    fetchPopularPhotos();
  }, []);

  return (
    <div className="max-h-[900px] w-screen pt-6 bg-white overflow-hidden">
      <div className="flex justify-center gap-6 flex-col items-center">
        <h1 className="font-bold text-[32px]">Explore</h1>
        <div className="flex gap-7">
          <button
            className={`${
              showVid
                ? "bg-black rounded-full text-white w-[150px] h-[40px] border-b-2 border-b-white"
                : "bg-white border-[2px] w-[150px] h-[40px] text-black rounded-full"
            }`}
            onClick={() => {
              setShowVid(true);
            }}
          >
            Popular Videos
          </button>
          <button
            className={`${
              !showVid
                ? "bg-black rounded-full text-white w-[150px] h-[40px] border-b-2 border-b-white"
                : "bg-white border-[2px] w-[150px] h-[40px] text-black rounded-full"
            }`}
            onClick={() => {
              setShowVid(false);
            }}
          >
            Popular Photos
          </button>
        </div>
        {showVid && <ProductCard popularVids={listOfVidImages} />}
        {!showVid && <ProductCard popularVids={listOfImages} />}
      </div>
    </div>
  );
};

export default HomeCardOne;

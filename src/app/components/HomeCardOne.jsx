"use client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ProductCardPopUp from "./ProductCardPopUp.jsx";

const HomeCardOne = () => {
  const [listOfVidImages, setListOfVidImages] = useState([]);
  const [listOfImages, setListOfImages] = useState([]);
  const [showVid, setShowVid] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");

  function handleClickedImage(id, type) {
    setOpenPopup(true);
    console.log("clicked photo", id, type);
    if (type === "image") {
      const searchContentId = async (id) => {
        const getContent = await fetch(
          "https://api.pexels.com/v1/photos/" + id,
          {
            headers: {
              Authorization:
                "ZFec6hZe2wRdP4WN2uHMPwezn5ExJYxpxPieXBqFxumxTRYInrQ4YhkY",
            },
          }
        );
        if (!getContent.ok) {
          throw new Error("Error fetching content");
        }
        const data = await getContent.json();
        console.log("getContent", data);
        setPopupImage(data.src.original);
      };
      searchContentId(id);
    }
    if (type == "video") {
      const searchContentId = async (id) => {
        const getContent = await fetch(
          "https://api.pexels.com/videos/videos/" + id,
          {
            headers: {
              Authorization:
                "ZFec6hZe2wRdP4WN2uHMPwezn5ExJYxpxPieXBqFxumxTRYInrQ4YhkY",
            },
          }
        );
        if (!getContent.ok) {
          throw new Error("Error fetching content");
        }
        const data = await getContent.json();
        console.log("getContent", data);
        const videoLink = data.video_files[1].link;
        console.log(videoLink, "videoLink");
        setPopupImage(videoLink);
      };
      searchContentId(id);
    }
  }

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
    <div
      className={`${
        openPopup
          ? "max-h-[900px] w-screen pt-6 bg-white relative"
          : "max-h-[900px] w-screen pt-6 bg-white overflow-hidden relative"
      }`}
    >
      <div className="flex justify-center gap-6 flex-col items-center">
        <h1 className="font-bold text-[32px]">Popular</h1>
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

        {openPopup && (
          <div>
            <ProductCardPopUp
              content={popupImage}
              handleClosingPopup={() => {
                setOpenPopup(false);
              }}
            />
          </div>
        )}
        {showVid && (
          <ProductCard
            popularVids={listOfVidImages}
            handleClickedImage={handleClickedImage}
            type={"video"}
          />
        )}
        {!showVid && (
          <ProductCard
            popularVids={listOfImages}
            handleClickedImage={handleClickedImage}
            type={"image"}
          />
        )}
      </div>
    </div>
  );
};

export default HomeCardOne;

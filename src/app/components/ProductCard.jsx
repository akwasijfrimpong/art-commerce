"use client";
import styles from "./ProductCard.module.css";

import { useEffect } from "react";

export default function ProductCard({ popularVids, handleClickedImage, type }) {
  const tableOne = popularVids.slice(0, 3);
  const tableTwo = popularVids.slice(3, 8);
  const tableThree = popularVids.slice(8, 12);
  const tableFour = popularVids.slice(12, 15);

  useEffect(() => {
    console.log(popularVids.length, "popularVids");
  }, [popularVids]);
  return (
    <div className="flex gap-7">
      <div className="flex flex-col gap-3">
        {tableOne.map((vid) => {
          return (
            <img
              src={vid.image}
              alt="vid"
              className="flex flex-col w-[320px] rounded"
              key={vid.id}
              onClick={() => {
                handleClickedImage(vid.id, type);
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        {tableTwo.map((vid) => {
          return (
            <img
              src={vid.image}
              alt="vid"
              className="flex flex-col w-[320px] rounded"
              key={vid.id}
              onClick={() => {
                handleClickedImage(vid.id, type);
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        {tableThree.map((vid) => {
          return (
            <img
              src={vid.image}
              alt="vid"
              className="flex flex-col w-[320px] rounded"
              key={vid.id}
              onClick={() => {
                handleClickedImage(vid.id, type);
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        {tableFour.map((vid) => {
          return (
            <img
              src={vid.image}
              alt="vid"
              className="flex flex-col w-[320px] rounded"
              key={vid.id}
              onClick={() => {
                handleClickedImage(vid.id, type);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

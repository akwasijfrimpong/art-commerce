"use client";

import { useEffect } from "react";

export default function ProductCard({ popularVids }) {
  useEffect(() => {
    console.log(popularVids, "popularVids");
  }, [popularVids]);
  return (
    <div className="grid grid-rows-3 grid-cols-4 gap-6">
      {popularVids.map((vid) => {
        return (
          <img src={vid} alt="vid" className="rounded-lg w-[300px] h-[auto]" />
        );
      })}
    </div>
  );
}

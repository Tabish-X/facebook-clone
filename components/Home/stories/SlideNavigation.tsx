"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

export default function SlideNavigation() {
  const swiper = useSwiper();
  const [interval_next, setInterval_next] = useState(0);
  const [interval_prev, setInterval_prev] = useState(0);
  const [hidden_next, setHidden_next] = useState(false);
  const [hidden_prev, setHidden_prev] = useState(false);

  useEffect(() => {
    swiper.on("reachEnd", () => {
      setHidden_next(true);
      setInterval_next(0);
    });
    if (interval_next > 0) {
      setHidden_prev(false);
    }
  }, [swiper, interval_next]);

  useEffect(() => {
    swiper.on("reachBeginning", () => {
      setHidden_prev(true);
      setHidden_next(false);
      setInterval_prev(0);
    });
    if (interval_prev > 0) {
      setHidden_next(false);
    }
  }, [swiper, interval_prev]);

  useEffect(() => {
    setHidden_prev(true);
  }, []);

  return (
    <>
      <button
        id="button-slide-next"
        className={`absolute top-1/2 -translate-y-1/2 right-2 w-12 h-12 rounded-full bg-white border border-[#0000006b] z-[1] transition-opacity duration-200 ${
          hidden_next ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => {
          swiper.slideNext();
          setInterval_next(interval_next + 1);
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-30 text-lg">
            <FaChevronRight />
          </span>
        </div>
      </button>

      {/* Previous button of slide */}
      <button
        className={`absolute top-1/2 -translate-y-1/2 left-2 w-12 h-12 rounded-full bg-white border border-[#0000006b] z-[1] transition-opacity duration-200 ${
          hidden_prev ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => {
          swiper.slidePrev();
          setInterval_prev(interval_prev + 1);
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-30 text-lg">
            <FaChevronLeft />
          </span>
        </div>
      </button>
    </>
  );
}

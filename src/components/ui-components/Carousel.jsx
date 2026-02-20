import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import paayumolilogo from "../../assets/tgglogo1.png";

export default function Carousel() {
  let [current, setCurrent] = useState(0);
  let slides = [
    paayumolilogo,
    paayumolilogo,
    paayumolilogo,
    paayumolilogo,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative ">
      <div
        className="flex transition-transform ease-out duration-1000 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} className="w-full " />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-[#FFD700] px-3 text-3xl">
        <button onClick={previousSlide} className="hover:text-white transition-colors">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="hover:text-white transition-colors">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}

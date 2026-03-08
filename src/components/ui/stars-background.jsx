import { cn } from "../libs/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";

export const StarsBackground = ({
  starDensity = 0.00035,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.25,
  maxTwinkleSpeed = 0.85,
  starWidth = 0.8,
  starHeight = 0.8,
  minTwinkleOpacity = 0.08,
  maxTwinkleOpacity = 0.4,
  starColor = "255, 244, 214",
  className,
}) => {
  const [stars, setStars] = useState([]);
  const canvasRef = useRef(null);

  const generateStars = useCallback(
    (width, height) => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        const baseOpacity =
          minTwinkleOpacity +
          Math.random() * (maxTwinkleOpacity - minTwinkleOpacity);

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * starWidth + starHeight,
          opacity: baseOpacity,
          baseOpacity,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
      starWidth,
      starHeight,
      minTwinkleOpacity,
      maxTwinkleOpacity,
    ]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        if (star.twinkleSpeed !== null) {
          const twinkleWave =
            (Math.sin(Date.now() * 0.001 * star.twinkleSpeed + star.twinklePhase) +
              1) /
            2;
          const lowerBound = Math.max(minTwinkleOpacity, star.baseOpacity * 0.55);
          const upperBound = Math.min(maxTwinkleOpacity, star.baseOpacity * 1.45);
          star.opacity = lowerBound + twinkleWave * (upperBound - lowerBound);
        }

        ctx.fillStyle = `rgba(${starColor}, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, minTwinkleOpacity, maxTwinkleOpacity, starColor]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "h-full w-full absolute inset-0 pointer-events-none z-0",
        className
      )}
    />
  );
};

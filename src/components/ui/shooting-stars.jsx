import { cn } from "../libs/utils";
import React, { useEffect, useState, useRef } from "react";

const getRandomStartPoint = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const edgePick = Math.random();

  // Bias trajectories to look like natural falling stars.
  if (edgePick < 0.65) {
    return {
      x: Math.random() * width,
      y: -40,
      angle: 25 + Math.random() * 40,
    };
  }

  if (edgePick < 0.85) {
    return {
      x: -40,
      y: Math.random() * height * 0.7,
      angle: 12 + Math.random() * 28,
    };
  }

  return {
    x: width + 40,
    y: Math.random() * height * 0.6,
    angle: 132 + Math.random() * 26,
  };
};
export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 3200,
  starColor = "#FFE3A2",
  trailColor = "#FF6A00",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState(null);
  const svgRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const createStar = () => {
      if (!isMounted) return;

      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutRef.current = window.setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {
      isMounted = false;
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          if (
            newX < -20 ||
            newX > window.innerWidth + 20 ||
            newY < -20 ||
            newY > window.innerHeight + 20
          ) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  return (
    <svg
      ref={svgRef}
      className={cn(
        "w-full h-full absolute inset-0 pointer-events-none z-0",
        className
      )}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

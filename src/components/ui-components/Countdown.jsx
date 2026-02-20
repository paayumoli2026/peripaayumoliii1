import { useCallback, useEffect, useState } from "react";

const Countdown = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    const formatTime = (time) => (time >= 10 ? time : `0${time}`);

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      return;
    }

    setCountDownTime({
      days: formatTime(Math.floor(timeDifference / (24 * 60 * 60 * 1000))),
      hours: formatTime(
        Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
      ),
      minutes: formatTime(
        Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
      ),
      seconds: formatTime(Math.floor((timeDifference % (60 * 1000)) / 1000)),
    });
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date(
      "March 12, " + new Date().getFullYear() + " 09:00:00"
    ).getTime();
    const interval = setInterval(() => getTimeDifference(countDownDate), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => startCountDown(), [startCountDown]);

  return (
    <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
      {Object.entries(countDownTime).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center glass-card relative overflow-hidden group">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-blend leading-none relative z-10 transition-transform duration-300 group-hover:scale-110">
              {value}
            </span>
            {/* Hover Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-gray-900 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-colors group-hover:text-gray-950">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

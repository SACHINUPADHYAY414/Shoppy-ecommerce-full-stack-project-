import { useCallback, useEffect, useState } from "react";

const Timer3 = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    let days =
      Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDifference / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;
    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    const intervalId = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
    return () => clearInterval(intervalId); 
  }, []);

  useEffect(() => {
    startCountDown();
    return () => clearInterval(); 
  }, [startCountDown]);

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      <div className="flex flex-col gap-2 relative items-center justify-center">
        <div className="h-16 w-14 sm:w-16 sm:h-32  lg:h-40 flex justify-center items-center bg-[#343650] rounded-lg">
          <span className="lg:text-4xl sm:text-2xl font-semibold text-white">
            {countDownTime?.days}
          </span>
        </div>
        <span className="text-white text-xs sm:text-2xl text-center capitalize">
          {countDownTime?.days === 1 ? "Day" : "Days"}
        </span>
      </div>
      <div className="flex flex-col gap-2 relative items-center justify-center">
        <div className="h-16 w-14 sm:w-16 sm:h-32 text-center  lg:h-40 flex justify-center items-center bg-[#343650] rounded-lg">
          <span className="lg:text-4xl text-center sm:text-2xl font-semibold text-white">
            {countDownTime?.hours}
          </span>
        </div>
        <span className="text-white text-xs sm:text-2xl text-center font-medium">
          {countDownTime?.hours === 1 ? "Hour" : "Hours"}
        </span>
      </div>
      <div className="flex flex-col gap-2 relative items-center justify-center">
        <div className="h-16 w-14 sm:w-16 sm:h-32  lg:h-40 flex justify-center items-center bg-[#343650] rounded-lg">
          <span className="lg:text-4xl sm:text-2xl font-semibold text-white">
            {countDownTime?.minutes}
          </span>
        </div>
        <span className="text-white text-xs sm:text-2xl text-center capitalize">
          {countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
        </span>
      </div>
      <div className="flex flex-col gap-2 relative items-center justify-center">
        <div className="h-16 w-14 sm:w-16 sm:h-32  lg:h-40 flex justify-center items-center bg-[#343650] rounded-lg">
          <span className="lg:text-4xl sm:text-2xl font-semibold text-white">
            {countDownTime?.seconds}
          </span>
        </div>
        <span className="text-white text-xs sm:text-2xl text-center capitalize">
          {countDownTime?.seconds === 1 ? "Second" : "Seconds"}
        </span>
      </div>
    </div>
  );
};

export default Timer3;

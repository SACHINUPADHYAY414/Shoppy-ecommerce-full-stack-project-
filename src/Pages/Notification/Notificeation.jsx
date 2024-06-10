import React, { useState, useEffect } from "react";
import Timer from "../Notification/timer";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const showNotificationFunc = () => {
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    };

    showNotificationFunc();

    const interval = setInterval(() => {
      showNotificationFunc();
    }, 5 * 60 * 5000);

    return () => clearInterval(interval);
  }, []);

  const NotificationBtn = ()=>{
  navigate("/women/clothing/top");
  };

  return (
    <div
    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded shadow-lg ${
      showNotification ? "block" : "hidden"
    }`}
  >
    <div className="w-full sm:max-w-md mx-auto rounded-lg shadow-lg">
      <div className="px-4 py-2 bg-yellow-400 rounded-t-lg">
        <h3 className="font-bold text-sm text-center text-black">WAIT! BONUS SPECIAL OFFER</h3>
      </div>
      <div className="px-4 py-4 bg-blue-400 rounded-b-lg">
        <div className="flex justify-center items-center">
          <img
            src="https://i.pinimg.com/originals/14/0d/82/140d824f8af317352197f741fe036b36.png"
            alt="notification"
            className="h-14 w-14 sm:h-18 sm:w-18"
          />
        </div>
      
        <h2 className="text-center text-yellow-200 text-lg font-bold mt-2 mb-4">SAVE UP TO 75% OFF</h2>
        <Timer />
        <p className="text-center font-bold my-2">**** LIMITED TIME DEAL ****</p>
        <p className="text-center text-white text-sm font-bold mb-4">This offer happens once a year, so take action TODAY before it goes away!</p>
        <button
          className="block mx-auto py-2 px-6 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          onClick={NotificationBtn}
        >
          CLAIM MY DISCOUNT
        </button>
      </div>
    </div>
  </div>
  );
};

export default Notification;

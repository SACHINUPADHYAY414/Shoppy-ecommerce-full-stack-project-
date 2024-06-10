import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShoppyAppDownload = () => {
    const navigate=useNavigate();

    const AppStore =()=>{
        navigate("/AppStore/Shoppy ")
    }
  
    const PlayStore =()=>{
        navigate("/PlayStore/ShoppyApp ")
    }

  return (
    <div className="w-full ">
      <div className="justify-center bg-blue-100 px-4 py-2 shadow-lg shadow-blue-500/40 items-center mx-auto border-dashed border-4 rounded-md  border-blue-100 w-[80%] mt-6 mb-6 flex">
        <div>
          <img
            src="https://blog.donexpress.com/assets/icons/cargando2.gif"
            alt="ecommecre"
            className="w-24 h-[24] items-center mx-auto"
          />
          {/* <img src='https://i.pinimg.com/originals/ab/03/64/ab0364b42231f7db2ca8765fec9ef1e5.png' alt='phone' className='w-24 h-[24] '></img> */}
        </div>
        <div className="flex flex-col justify-between space-x-4 px-10 py-10 space-y-3">
          <h1 className="font-bold text-blue-500 text-4xl text-center">
            {" "}
            MORE KNOCKOUT OFFERS WAITING!
          </h1>
          <h2 className="text-center font-bold">Only On The Shoppy App</h2>
          <div className="flex space-x-4 items-center ">
            <h3 className="font-bold text-gray-600 text-2xl">Download Now </h3>
            
            <button className="text-2xl font-semibold flex items-center space-x-2 border-b-2 border-r-2 shadow rounded px-2" onClick={PlayStore}>
              <FaGooglePlay />
              <h2>Google Play</h2>
            </button>

            <button src="" className="text-2xl font-semibold flex items-center space-x-2 border-b-2 border-r-2 shadow rounded px-2" onClick={AppStore}>
              <FaApple />
              <h2> App Store</h2>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppyAppDownload;

import React from "react";

const SummerSaleproduct = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="flex w-full space-x-0 px-10 py-10 ">
        <div className="bg-gray-900 flex flex-col justify-center p-6 rounded-l-2xl">
          <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
            Summer Sale
            <br />
            Up to 70% off.
          </h2>

          <p className="mb-6 max-w-md text-gray-400">
            Get ready to make the most of your summer with our sensational
            Summer Sale, offering discounts of up to 70% off! It's time to dive
            into a world of savings and seize the hottest deals of the season.
          </p>

          <div className="ml-4">
            <a
              href="#"
              className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
            >
              Buy now
            </a>
          </div>
        </div>

        <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5 rounded-r-2xl">
          <img
            src="https://mymoonstruck.com/cdn/shop/files/044A7536_1800x1800.jpg?v=1706089652"
            loading="lazy"
            alt="Photo by Dom Hill"
            className="h-[50vh] w-full object-cover object-center rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SummerSaleproduct;

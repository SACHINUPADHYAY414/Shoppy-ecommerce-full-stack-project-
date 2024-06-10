import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="justify-center text-center font-3xl font-bold text-black">Shoppy</h2>
          <div className="max-w-md text-center text-gray-600 lg:text-lg">“Develop eCommerce project: research, plan, design, develop, integrate payments, ensure security, manage products, set up shipping, test, launch, market, analyze..”</div>

          <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
              <img src="https://portfoliosachinkumar.vercel.app/static/media/Sachin.64cde96dbfad8a3b9bf1.png" loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center" />
            </div>

            <div>
              <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Sachin Upadhyay</div>
              <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">CEO / Shoppy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

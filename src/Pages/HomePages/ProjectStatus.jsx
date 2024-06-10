import React from "react";

function StatsSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <h2 className="font-bold text-3xl text-center text-gray-400 mt-4">
        Services
      </h2>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1.5k</dt>
            <dd className="font-bold text-gray-500 dark:text-gray-400">
              Users
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1k</dt>
            <dd className="font-bold text-gray-500 dark:text-gray-400">
              Products
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">2k+</dt>
            <dd className="font-bold text-gray-500 dark:text-gray-400">
              Total Orders
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default StatsSection;

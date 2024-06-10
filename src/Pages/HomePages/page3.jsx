import React from 'react';

const MyComponent = () => {
    return (
        <section className=" bg-gray-200">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light sm:text-lg ">
                <p className="mb-0 text-black text-left">New </p>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Blue and White Tropical Camp Shirt</h2>
                   
                   <p>

                    Free delivery and shipping

                    Secure online payment</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://baygrass.in/cdn/shop/files/baygrass1618.jpg?v=1709750288&width=1440" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://baygrass.in/cdn/shop/files/baygrass1621.jpg?v=1709750288&width=1440" alt="office content 2" />
                </div>
            </div>
        </section>
    );
};

export default MyComponent;

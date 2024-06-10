import React from 'react';

const ProductSection = () => {
  return (
    <section className="h-full w-full bg-blue-100">
      <div className="mb-4 flex justify-between">
        <div className="ml-10 mr-10 flex w-full flex-col justify-center sm:mb-8 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find Best<br />Products</h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">"Welcome to Shoppy, where every click brings you closer to extraordinary deals and unparalleled shopping experiences!"</p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ml-10 mr-10">
          <div className="relative left-12 rounded-lg top-12 z-10 -ml-12 overflow-hidden  md:left-16 md:top-16 lg:ml-0">
            <img src="https://www.shobo.in/cdn/shop/products/CS11010YL-R4_600x_724d3e41-0521-4310-bc40-3ed3aa713b78_370x.jpg?v=1618744944" loading="lazy" alt="Photo by Kaung Htet" className="h-70 w-38 object-cover object-center" />
          </div>

          <div className="overflow-hidden rounded-lg mt-6 mb-4 bg-gray-100 shadow-lg">
            <img src="https://www.summersomewhereshop.com/cdn/shop/files/CannesDress_Ecomm-4.png?crop=center&height=750&v=1693280042&width=500" loading="lazy" alt="Photo by Manny Moreno" className="h-[65vh] w-38 object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;

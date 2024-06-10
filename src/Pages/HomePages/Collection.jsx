import React from 'react'

const Collection = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Collections</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"> Elevate your space with this sleek glass coffee table. Its minimalist design and tempered glass top make it a perfect centerpiece for any contemporary living room.</p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2">

      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-300">Home</span>
          <span class="text-lg font-semibold text-white lg:text-xl">Decoration</span>
        </div>
      </a>

      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-300">Modern</span>
          <span class="text-lg font-semibold text-white lg:text-xl">Furniture</span>
        </div>
      </a>
   
    </div>
  </div>
</div>
  )
}

export default Collection
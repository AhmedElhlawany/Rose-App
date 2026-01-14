import Image from 'next/image';
import React from 'react';

/**
 * Gallery section displaying gift box images in a masonry-style grid layout
 */
const Gallery = () => {
  return (
    <section className="container mx-auto w-11/12 py-10">
      {/* Section header */}
      <div className="mb-11 text-center">
        <h2 className="mb-2 font-bold text-softPink-500">Gallery</h2>
        <h3 className="text-4xl font-bold text-maroon-700">
          Check Out our Wonderful Gallery
        </h3>
      </div>

      {/* 12-column grid with varied image sizes */}
      <div className="grid grid-cols-12 grid-rows-[repeat(10,_6.5rem)] gap-3">
        {/* Image 1 - Large left column */}
        <div className="relative col-span-4 row-span-6">
          <Image
            src="/images/galleryGrid1.svg"
            alt="4 presents wedding, birthday, anniversary, graduation"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2 - Top middle */}
        <div className="relative col-span-4 col-start-5 row-span-4">
          <Image
            src="/images/galleryGrid2.svg"
            alt="2 red gifts and 1 fluffy heart"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3 - Top right */}
        <div className="relative col-span-4 col-start-9 row-span-4">
          <Image
            src="/images/galleryGrid3.svg"
            alt="engagement ring in middle of flowers"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 4 - Bottom left */}
        <div className="relative col-span-4 col-start-1 row-span-4 row-start-7">
          <Image
            src="/images/galleryGrid4.svg"
            alt="flower bouquet and box of chocolate heart shape"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 5 - Large middle column */}
        <div className="relative col-span-4 col-start-5 row-span-6 row-start-5">
          <Image
            src="/images/galleryGrid5.svg"
            alt="engagement ring in middle of bouquet of white flowers"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 6 - Large right column */}
        <div className="relative col-span-4 col-start-9 row-span-6 row-start-5">
          <Image
            src="/images/galleryGrid6.svg"
            alt="engagement ring with white engagement card gift"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

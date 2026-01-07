import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto p-20">
      <div className="grid grid-cols-12 grid-rows-[repeat(12,_3.75rem)] gap-3">
        {/* image 1 */}
        <div className="relative col-span-4 row-span-8">
          <Image
            src="/grid1.svg"
            alt="4 presents wedding, birthday, anniversary, graduation"
            fill
            className="object-cover"
          />
        </div>

        {/* image 2 */}
        <div className="relative col-span-4 col-start-5 row-span-4">
          <Image
            src="/grid2.svg"
            alt="2 red gifts and 1 fluffy heart"
            fill
            className="object-cover"
          />
        </div>

        {/* image 3 */}
        <div className="relative col-span-4 col-start-9 row-span-4">
          <Image
            src="/grid3.svg"
            alt="engagement ring in middle of flowers"
            fill
            className="object-cover"
          />
        </div>

        {/* image 4 */}
        <div className="relative col-span-4 row-span-4 row-start-9">
          <Image
            src="/grid4.svg"
            alt="flower bouquet and box of chocolate heart shape"
            fill
            className="object-cover"
          />
        </div>

        {/* image 5 */}
        <div className="relative col-span-4 col-start-5 row-span-8 row-start-5">
          <Image
            src="/grid5.svg"
            alt="engagement ring in middle of bouquet of white flowers"
            fill
            className="object-cover"
          />
        </div>

        {/* image 6 */}
        <div className="relative col-span-4 col-start-9 row-span-8 row-start-5">
          <Image
            src="/grid6.svg"
            alt="engagement ring with white engagement card gift"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

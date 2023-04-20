import React from 'react';

const Image = ({ src, alt }) => (
  <div className="relative rounded-xl lg:rounded-3xl overflow-hidden w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 5xl:h-[550px] extra-large:h-[600px] mt-10 md:mt-10 lg:mt-0">
    <img
      className="absolute object-cover left-0 aspect-square h-full w-full transform transition-all duration-500 ease-in-out hover:scale-150 hover:z-10"
      src={src}
      alt={alt}
    />
    <div className="absolute inset-0 z-20 hidden hover:block">
      <img
        className="absolute rounded-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out hover:scale-200"
        src={src}
        alt={alt}
        style={{ transformOrigin: '50% 50%' }}
      />
    </div>
  </div>
);

export default Image;
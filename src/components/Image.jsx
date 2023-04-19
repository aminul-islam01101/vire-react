import React from 'react';

const Image = ({ src, alt }) => (
  <div className="relative rounded-3xl overflow-hidden w-full h-full">
    <img
      className="absolute  top-0 left-0 w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-150 hover:z-10"
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

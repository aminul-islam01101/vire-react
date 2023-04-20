import React from 'react';

const ArticleHeading = ({ heading1, heading2, heading3 }) => (
  <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl article-heading relative group">
    <h2 className="transition-all duration-500 ease-in-out hover:translate-x-2">
      <p className="text-secondary whitespace-nowrap">{heading1}</p>
    </h2>
    <h2 className="transition-all duration-500 ease-in-out">
      <p className="text-neutral">{heading2}</p>
      <p className="text-neutral">{heading3}</p>
    </h2>
  </div>
);

export default ArticleHeading;

import React from 'react';

const ArticleHeading = ({ heading1, heading2 }) => (
    <div className="text-7xl article-heading relative group">
    <h2 className="transition-all duration-500 ease-in-out hover:translate-x-2">
      <p className="text-secondary">{heading1}</p>
    </h2>
    <h2 className="transition-all duration-500 ease-in-out">
      <p className="text-neutral">{heading2}</p>
    </h2>
  </div>
  
);

export default ArticleHeading;

import React from 'react';

const ServiceCard = ({ icon, text }) => {
  const Icon = icon; // store the icon component in a variable
  return (
    <div className="px-10 py-20 rounded-3xl border border-primary text-primary hover:text-base-200 hover:bg-primary">
      <div className="text-3xl">{React.createElement(Icon)} </div>
      <p className="text-[18px]"> {text}</p>
    </div>
  );
};

export default ServiceCard;

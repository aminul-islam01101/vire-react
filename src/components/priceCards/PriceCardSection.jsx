import React from 'react';
import PriceCardLarge from './PriceCardLarge';
import PriceCardSmall from './PriceCardSmall';

const PriceCardSection = () => (
  <div className="grid grid-cols-3 gap-10 items-center p-28">
    <PriceCardSmall duration={3} price={39} />
    <PriceCardLarge duration={12} price={39} />
    <PriceCardSmall duration={6} price={79} />
  </div>
);

export default PriceCardSection;

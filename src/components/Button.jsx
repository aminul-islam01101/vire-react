import React from 'react';
import { RxArrowTopRight } from 'react-icons/rx';

const Button = ({ children }) => {
  console.log('hello');

  return (
    <div>
      <button type="button">
        <div className="flex items-center gap-5 ">
          <div className="relative inline-block">
            <div className="p-7 rounded-full border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
              <div className="absolute inset-0 flex items-center justify-center hover:scale-150 transition-transform duration-150">
                <RxArrowTopRight className="text-xl" />
              </div>
            </div>
          </div>

          <span>{children}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;

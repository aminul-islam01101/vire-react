import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import Modal from '../Modal';
import PaymentModalBody from './PaymentModalBody';

const PriceCardLarge = ({ duration, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-primary rounded-3xl py-16 px-24 text-white">
      <p className="text-center text-2xl">Annual</p>
      <p className="py-10 text-center">
        $ &nbsp; <span className="text-7xl font-bold">{price}</span> &nbsp;/&nbsp; yr
      </p>
      <ul className="pb-10 space-y-3 text-xl">
        <li className="flex gap-2 items-center">
          <TiTick className="text-3xl" /> Unlimited Access
        </li>
        <li className="flex items-center">
          <TiTick className="text-3xl" />
          24/7 chat Supports
        </li>
      </ul>
      <button
        type="button"
        onClick={handleClick}
        className="btn-large border hover:bg-white hover:text-primary border-white text-white py-3 text-base"
      >
        Start Free Trial
      </button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <PaymentModalBody handleCancel={handleClose} />
      </Modal>
    </div>
  );
};

export default PriceCardLarge;

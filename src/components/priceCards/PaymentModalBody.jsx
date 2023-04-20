import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import Select from 'react-select';

const PaymentModalBody = ({ handleCancel, handleTrial }) => {
  console.log('hello');
  const cardOptions = [
    { value: 'visa', label: 'Visa' },
    { value: 'master', label: 'Master' },
    { value: 'paypal', label: 'PayPal' },
  ];

  const defaultOption = { value: '', label: 'Select a Card' };

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div className="m-height px-20 py-16 text-black rounded-2xl" style={{ overflowY: 'auto' }}>
      <h3 className="text-3xl pb-3">Starts 3 Months Trial</h3>
      <p className="pb-3">
        To see if our service and management tools are right for you <br />
        Try it for 30 Days on us
      </p>
      <h4 className="text-2xl pb-3">Document Link</h4>
      <ul className="pb-10 space-y-3 text-xl">
        <li className="flex gap-2 items-center">
          <TiTick className="text-3xl text-[#4CAF50]" /> Smart communication management
        </li>
        <li className="flex items-center">
          <TiTick className="text-3xl text-[#4CAF50]" />
          Customizable reporting dashboards and widgets
        </li>
        <li className="flex items-center">
          <TiTick className="text-3xl text-[#4CAF50]" />
          Time management integration and suite
        </li>
      </ul>
      {/* Subscription Details */}
      <div className="border border-primary rounded-2xl p-16 text-xl space-y-3">
        <h5 className="text-2xl">Subscription Details</h5>
        <p>
          We Charge a Monthly pro-rated for each service you opt into for management. You may opt
          out at any time.{' '}
        </p>
        <div className="bg-base-100 flex justify-between p-3 rounded-lg">
          <p>Monthly Subscription Fee</p>
          <p>12.00 USD</p>
        </div>
        <h6 className="text-xl">Payment Method</h6>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={[defaultOption, ...cardOptions]}
          components={{
            // DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          classNamePrefix="select2-selection"
        />
        <p>
          Billing Start at the end of your trial period. By completing this form when you accept
          Terms & Condition
        </p>
        {/* checkbox */}
        <div className="flex items-center ">
          <label htmlFor="terms" className="text- dark:text-gray-400 mt-3">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              aria-label="terms"
              required
              className="mr-1 rounded-sm checkbox checkbox-md checkbox-success focus:ring-0 "
            />
            &nbsp;I have read & Accept the Terms & Condition
          </label>
        </div>
        <div className="flex justify-end gap-5 pt-5">
          <button type="button" onClick={handleCancel} className="button text-xl py-3 px-6">
            Cancel
          </button>
          <button
            type="button"
            onClick={handleTrial}
            className="button bg-primary text-white capitalize text-xl py-3 px-6"
          >
            Begin Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModalBody;

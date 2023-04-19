import React from 'react';
import { AiOutlineContacts } from 'react-icons/ai';
import ArticleHeading from '../ArticleHeading';
import Button from '../Button';
import Image from '../Image';
import ServiceCard from './ServiceCard';

const DataServices = ({ handleDataServices, dataServiceOpen }) => {
  console.log('hello');

  return (
    <div className="p-10">
      <div className="flex py-20 gap-10 ">
        <figure className="w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1661965607254-26ead2928c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            alt="Data"
          />
        </figure>
        <article className="w-1/2">
          <header>
            <ArticleHeading heading1="Data" heading2="Discovery" />
          </header>
          <main className="py-20">
            <p>
              Having accurate and up-to-date data is essential in today&#39;s fast-paced business
              world. The ability to target the right audience with the right message can make or
              break a business. However, with the vast amount of data available, it can be a
              challenge to identify and target the right contacts. This is where Business Savvy
              UK&#39;s Data Discovery service comes in.
            </p>
            <p>
              At Business Savvy UK, we understand that achieving sales and marketing goals is
              essential for businesses to succeed. Our Sales & Marketing service provides businesses
              with the support they need to reach their target audience effectively and increase
              their revenue.
            </p>
          </main>
          <Button handleButtonClick={handleDataServices}>Our Services</Button>
        </article>
      </div>
      {dataServiceOpen && (
        <div className="grid grid-cols-4 gap-5">
          <ServiceCard icon={AiOutlineContacts} text="Contact Discovery" />
          <ServiceCard icon={AiOutlineContacts} text="Contact Discovery" />
          <ServiceCard icon={AiOutlineContacts} text="Contact Discovery" />
          <ServiceCard icon={AiOutlineContacts} text="Contact Discovery" />
        </div>
      )}
    </div>
  );
};

export default DataServices;

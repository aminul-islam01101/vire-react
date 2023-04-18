import React from 'react';
import Button from '../Button';

const DataServices = () => {
  console.log('hello');

  return (
    <div>
      <div className="flex py-20 ">
        <figure className="w-1/2">
          <img src="" alt="Data" />
        </figure>
        <article className="w-1/2">
          <header>
            <h3>Data</h3>
            <h3>Discovery</h3>
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
          <Button>Our Services</Button>
         
        </article>
      </div>
    </div>
  );
};

export default DataServices;

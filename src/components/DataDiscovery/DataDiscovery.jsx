import React from 'react';
import { BsDatabaseCheck } from 'react-icons/bs';
import { RiContactsBookLine, RiDatabaseLine, RiUser3Line } from 'react-icons/ri';
import ArticleHeading from '../Common/ArticleHeading';
import Button from '../Common/Button';
import Image from '../Common/Image';

const DataDiscovery = ({ handleDataServices, dataServiceOpen }) => (
  <div className=" min-h-screen  w-full" id="dataDiscovery">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-14 xl:px-8 lg:px-6 5xl:px-14 extra-large:px-28 extra-large:gap-32 h-full w-full lg:my-10 xl:my-20 justify-start items-start">
      <figure className="justify-start items-start relative top-0">
        <Image
          src="https://images.unsplash.com/photo-1661965607254-26ead2928c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt="Data"
        />
      </figure>
      <article className="justify-start items-baseline space-y-4">
        <header className="text-center lg:text-left my-6 lg:mt-[10%]">
          <ArticleHeading heading1="Data" heading2="Discovery" />
        </header>
        <main className="text-base text-center lg:text-left space-y-4">
          <p>
            Having accurate and up-to-date data is essential in today&#39;s fast-paced business
            world. The ability to target the right audience with the right message can make or break
            a business. However, with the vast amount of data available, it can be a challenge to
            identify and target the right contacts. This is where Business Savvy UK&#39;s Data
            Discovery service comes in.
          </p>
          <p>
            At Business Savvy UK, we understand that achieving sales and marketing goals is
            essential for businesses to succeed. Our Sales & Marketing service provides businesses
            with the support they need to reach their target audience effectively and increase their
            revenue.
          </p>

          <div className="text-center lg:text-left">
            {!dataServiceOpen && (
              <Button handleButtonClick={handleDataServices}>Our Services</Button>
            )}
          </div>
        </main>
      </article>
    </div>
    {dataServiceOpen && (
      <div className="flex flex-col my-10 justify-center items-center">
        <div className="text-4xl lg:text-6xl xl:text-7xl article-heading relative group text-center my-10 lg:text-left">
          <h2 className="transition-all duration-500 ease-in-out">
            <p className="text-secondary font-medium">Our</p>
          </h2>
          <h2 className="transition-all duration-500 ease-in-out -translate-y-2">
            <p className="text-base-100 font-medium">Services</p>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 5xl:gap-20">
          <div className="px-6 py-20 rounded-3xl border border-primary text-primary hover:text-base-200 hover:bg-primary space-y-4">
            <RiContactsBookLine className="text-6xl" />
            <p className="text-3xl">Contact Discovery</p>
          </div>

          <div className="px-10 py-20 rounded-3xl border border-primary text-primary hover:text-base-200 hover:bg-primary space-y-4 items-center">
            <RiDatabaseLine className="text-6xl" />
            <p className="text-3xl">Opt-in Data</p>
          </div>

          <div className="px-10 py-20 rounded-3xl border border-primary text-primary hover:text-base-200 hover:bg-primary space-y-4 items-center">
            <RiUser3Line className="text-6xl" />
            <p className="text-3xl">Account Profiling</p>
          </div>

          <div className="px-10 py-20 rounded-3xl border border-primary text-primary hover:text-base-200 hover:bg-primary space-y-4 items-center">
            <BsDatabaseCheck className="text-6xl" />
            <p className="text-3xl">Data Cleansing Enrichment</p>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default DataDiscovery;

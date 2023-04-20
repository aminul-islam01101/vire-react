import React from 'react';
import ArticleHeading from '../ArticleHeading';
import world from '../../assets/world.svg';

const ServiceArea = () => (
  <div className="">
    <ArticleHeading
      heading1="We cover"
      heading2="A wide range of regions"
      heading3="worldwide, including"
    />
    <div className="grid grid-cols-1  lg:grid-cols-[2fr_3fr] lg:gap-x-10 xl:gap-x-14  extra-large:gap-20 h-full w-full lg:my-10 xl:my-20 justify-start items-center">
      <article className="justify-start items-baseline space-y-4 order-last lg:order-first">
        <main className="text-base text-left space-y-4 ">
          <p>
            At Business Savvy UK, we understand that the information landscape constantly evolves,
            leading to continual change and data decay. Therefore, we aim to help increase growth
            and prosperity by supplying our clients with intelligent, cleansed, and enriched data
            services. Our team of experts validates and prepares required data fields for our
            clients to prospect and explore new viable and profitable revenues.
          </p>
          <p>
            With a proactive approach, determination, and optimized lead enrichment data, we can
            help you revitalize and target your business services to the appropriate audience,
            thereby increasing revenue. Our core strengths and values are data-driven, and we are
            dedicated to helping businesses unlock the power of their data.
          </p>
          <p>
            Partnering with Business Savvy UK for your Data Discovery needs means working with a
            team of professionals who understand the importance of accurate and up-to-date data. We
            take the time to understand your business, your target audience, and your objectives to
            provide you with custom data solutions that meet your specific needs.{' '}
          </p>
          <p>
            Contact us today to learn how we can help you target the right contacts and unlock the
            power of your data.
          </p>
        </main>
      </article>
      <figure className="justify-start items-start relative top-0">
        <img className="w-full" src={world} alt="Data" />
      </figure>
    </div>
  </div>
);

export default ServiceArea;

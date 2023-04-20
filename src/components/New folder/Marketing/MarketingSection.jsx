import React from 'react';
import marketing from '../../assets/marketing.svg';
import ArticleHeading from '../ArticleHeading';
import Button from '../Button';
import ImgViewMore from '../ImgViewMore';

const MarketingSection = ({ handleMarketingView, marketingViewOpen }) => (
  <div className="">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16  lg-plus:gap-x-20 xl:gap-x-14 2xl:gap-x-20  2560:gap-32 h-full w-full lg:my-10 xl:my-20 justify-start items-start">
      <figure className="justify-start items-start relative  top-0">
        <ImgViewMore src={marketing} alt="Data" />
      </figure>
      <article className="justify-start items-baseline space-y-4">
        <header className="text-center mt-10 lg:mt-0 lg:text-left mb-3 xl-minus:mb-5 2xl:mb-16 ">
          <ArticleHeading heading1="Linkedin" heading2="Marketing Service" />
        </header>
        <main className="text-base  lg:text-left space-y-3 xl-minus:space-y-5 2xl:space-y-7  5xl:text-lg 2560:text-xl">
          <p>
          Here at Business Savvy UK, we understand the importance of a solid online presence, and we offer services to optimize your LinkedIn profile to help you get ahead of the game.
          </p>
          <p>
          With over 800 million users, LinkedIn is a powerful social media platform that lets you keep all your essential documents, qualifications, awards, honours, work experience, and more in one place. Plus, your profile headline alone gets put in front of hundreds and thousands of people every time you write a post
          </p>
          <p>
          Our team of experts can optimize your LinkedIn profile to help you stand out with a profile that speaks in your unique tone of voice and positions you for success in your niche. In addition, we provide calls-to-action that move your audience to connect, engage, and message you, a captivating headline that makes people eager to click, and a summary that speaks to your target audience.
          </p>

          <p className="hidden 2xl:block">
            At Business Savvy UK, we understand that every business has unique needs. That&#39;s why
            we offer customized product sourcing and recommendation services tailored to each
            client&#39;s individual needs. Whether you&#39;re a startup or an established business,
            we can help you find the right products to promote and grow your business.
          </p>
        </main>
        <div className="text-center lg:text-left  ">
          {!marketingViewOpen && <Button handleButtonClick={handleMarketingView}>View More</Button>}
        </div>
        {marketingViewOpen && (
          <div className="text-base  lg:text-left space-y-3 xl-minus:space-y-5 2xl:space-y-7 2560:space-y-10  5xl:text-lg 2560:text-xl">
            <p className="2xl:hidden">
              At Business Savvy UK, we understand that every business has unique needs. That&#39;s
              why we offer customized product sourcing and recommendation services tailored to each
              client&#39;s individual needs. Whether you&#39;re a startup or an established
              business, we can help you find the right products to promote and grow your business.
            </p>
            <p className="">
              We have established partnerships with manufacturers and suppliers worldwide, allowing
              us to offer a wide range of products across various industries. Our team of experts is
              dedicated to providing the best service possible, ensuring our clients&#39; access to
              the latest and most innovative products.
            </p>
            <p>
              Partnering with us means working with a team of professionals dedicated to your
              success. We take the time to understand your business and goals, providing
              personalized solutions that meet your needs.{' '}
            </p>
            <p>
              Contact us today to learn how we can help you find the best products to promote and
              grow your business.
            </p>
          </div>
        )}
      </article>
    </div>
  </div>
);

export default MarketingSection;

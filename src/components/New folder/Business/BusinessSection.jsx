import React from 'react';
import business from '../../assets/business.svg';
import ArticleHeading from '../ArticleHeading';
import Button from '../Button';
import ImgViewMore from '../ImgViewMore';

const BusinessSection = ({ handleBusinessView, businessViewOpen }) => (
  <div className="">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16  lg-plus:gap-x-20 xl:gap-x-14 2xl:gap-x-20  2560:gap-32 h-full w-full lg:my-10 xl:my-20 justify-start items-start">
      <article className="justify-start items-baseline space-y-4">
        <header className="text-center mt-10 lg:mt-0 lg:text-left mb-3 xl-minus:mb-5 2xl:mb-16 ">
          <ArticleHeading heading1="Introducing" heading2="Business Oportunities" />
        </header>
        <main className="text-base  lg:text-left space-y-3 xl-minus:space-y-5 2xl:space-y-7  5xl:text-lg 2560:text-xl">
          <p>
            At Business Savvy UK, we understand that finding the right business opportunity can be
            challenging. That&#39;s why we offer a comprehensive business opportunities service to
            help connect entrepreneurs with franchises, businesses for sale, or brand-new
            opportunities from our client base worldwide. Our team of experts works closely with
            clients to understand their specific needs, preferences, and objectives. We then
            leverage our extensive network and resources to identify and recommend suitable business
            opportunities that align with their goals.
          </p>
          <p>
            Our business opportunities service covers a wide range of industries, from retail and
            hospitality to technology and healthcare. So, whether you&#39;re a first-time
            entrepreneur or a seasoned business owner, we have the expertise and experience to help
            you find the perfect opportunity.
          </p>
          <p className="hidden 2xl:block">
            In addition to recommending opportunities, we also provide support throughout the
            process. This includes conducting due diligence, negotiating deals, and providing
            guidance on financing and legal matters.
          </p>
        </main>
        <div className="text-center lg:text-left  ">
          {!businessViewOpen && <Button handleButtonClick={handleBusinessView}>View More</Button>}
        </div>
        {businessViewOpen && (
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
      <figure className="justify-start items-start relative order-first lg:order-last  top-0">
        <ImgViewMore src={business} alt="Data" />
      </figure>
    </div>
  </div>
);

export default BusinessSection;

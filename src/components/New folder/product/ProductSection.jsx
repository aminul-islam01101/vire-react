import React from 'react';
import product from '../../assets/product.svg';
import ArticleHeading from '../ArticleHeading';
import Button from '../Button';
import ImgViewMore from '../ImgViewMore';

const ProductSection = ({ handleProductView, productViewOpen }) => (
  <div className="">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16  lg-plus:gap-x-20 xl:gap-x-14 2xl:gap-x-20  2560:gap-32 h-full w-full lg:my-10 xl:my-20 justify-start items-start ">
      <figure className="justify-start items-start relative  top-0">
        <ImgViewMore src={product} alt="Data" />
      </figure>
      <article className="justify-start items-baseline space-y-4">
        <header className="text-center mt-10 lg:mt-0 lg:text-left mb-3 xl-minus:mb-5 2xl:mb-16 ">
          <ArticleHeading heading1="Product Sourcing &" heading2="Recommendation" />
        </header>
        <main className="text-base  lg:text-left space-y-3 xl-minus:space-y-5 2xl:space-y-7  5xl:text-lg 2560:text-xl">
          <p>
            Looking for new and innovative products to promote can be daunting for any business.
            That&#39;s where Business Savvy UK comes in. Our product sourcing and recommendation
            service is designed to help companies source the best products from manufacturers
            seeking dedicated distributors or resellers. We tailor our sourcing to each client&#39;s
            individual needs, ensuring they have little to no competition in some cases. We aim to
            help businesses stand out in their market and gain a competitive edge
          </p>
          <p>
            But our services don&#39;t stop at sourcing. We also offer logistics services, ensuring
            that the products are delivered to your doorstep promptly and efficiently. In addition,
            we help with the route to market in promoting the product, guiding the best ways to
            reach your target audience and promote your product effectively.
          </p>
          <p className="hidden 2xl:block">
            At Business Savvy UK, we understand that every business has unique needs. That&#39;s why
            we offer customized product sourcing and recommendation services tailored to each
            client&#39;s individual needs. Whether you&#39;re a startup or an established business,
            we can help you find the right products to promote and grow your business.
          </p>
        </main>
        <div className="text-center lg:text-left  ">
          {!productViewOpen && <Button handleButtonClick={handleProductView}>View More</Button>}
        </div>
        {productViewOpen && (
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

export default ProductSection;

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import logo from './assets/logo.svg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-[2%] md:top-[5%] z-50 !border-transparent bg w-[100vw] my-layout max-h-[100px]">
      <div className="relative flex items-center justify-between border-2 mx-auto w-full h-[100px]  bg-[#F1F1F2] rounded-xl">
        <Link
          to="banner"
          spy
          smooth
          offset={-100}
          duration={300}
          className="inline-flex items-center justify-center"
        >
          <img src={logo} className="w-[261px] h-[70px]" alt="" />
        </Link>
        <ul className="items-center hidden space-x-1 xl:space-x-5 lg:flex px-1 font-medium text-black menu menu-horizontal h-full lg:text-sm xl:text-base">
          <li className="text-black">
            <Link
              to="banner"
              spy
              smooth
              offset={-100}
              duration={300}
              className="bg-[#F1F1F2] text-black"
            >
              Home
            </Link>
          </li>
          <li
            className="hover:border-white hover:transition-all hover:duration-300 hover:ease-in border-b-4 border-transparent dropdown h-full"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
          >
            {/* Services Drop Down */}
            <span className="hover:bg-transparent h-full text-black">Services</span>
            <ul className="bg-[#F1F1F2] text-xl font-medium dropdown-menu !rounded-t-none p-3">
              <li className="transition-all hover:bg-neutral hover:text-white text-black">
                <Link
                  to="dataDiscovery"
                  spy
                  smooth
                  offset={-100}
                  duration={300}
                  className="hover:bg-transparent text-lg !bg-none"
                >
                  Data Discovery
                </Link>
              </li>
              <li className="transition-all text-black hover:bg-neutral hover:text-white">
                <Link
                  to="productSourcing"
                  spy
                  smooth
                  offset={-100}
                  duration={300}
                  className="hover:bg-transparent text-lg"
                >
                  Product Sourcing & Recommendations
                </Link>
              </li>
              <li className="transition-all  text-black hover:bg-neutral hover:text-white">
                <Link
                  to="introducingBusiness"
                  spy
                  smooth
                  offset={-100}
                  duration={300}
                  className="hover:bg-transparent text-lg"
                >
                  Introducing Business Opportunities
                </Link>
              </li>
              <li className="transition-all  text-black hover:bg-neutral hover:text-white">
                <Link
                  to="linkedInMarketing"
                  spy
                  smooth
                  offset={-100}
                  duration={300}
                  className="hover:bg-transparent text-lg"
                >
                  LinkedIn Marketing Services
                </Link>
              </li>
            </ul>
          </li>

          <li className="text-black">
            <Link
              to="pricing"
              spy
              smooth
              offset={-100}
              duration={300}
              className="hover:bg-transparent"
            >
              Pricing
            </Link>
          </li>
          <li className="text-black">
            <Link
              to="contact"
              spy
              smooth
              offset={-100}
              duration={300}
              className="hover:bg-transparent"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Login And SignUp Button */}
        <Link
          to="login"
          className="mr-5 hidden lg:block xl:px-10 5xl:px-12 rounded-md 5xl:py-4 py-3 text-center border border-neutral transition-all duration-700 hover:bg-info hover:text-white px-4 lg:px-8 font-bold"
        >
          Login
        </Link>
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="gray"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="gray"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="gray"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-accent border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="banner" className="inline-flex items-center">
                      <img src={logo} className="w-44 h-20" alt="" />
                    </Link>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-transparent focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-neutral" viewBox="0 0 24 24">
                        <path
                          fill="gray"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 px-1 text-xl font-medium text-white menu menu-vertical">
                    <li className="text-black bg-accent">
                      <Link
                        to="banner"
                        spy
                        smooth
                        offset={-100}
                        duration={300}
                        className="!p-0 bg-[#F1F1F2] text-black"
                      >
                        Home
                      </Link>
                    </li>
                    <div className="dropdown dropdown-hover ">
                      <label tabIndex={0} className="text-black">
                        Services
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-accent text-xl font-medium"
                      >
                        <li className="transition-all text-black">
                          <Link
                            to="dataDiscovery"
                            spy
                            smooth
                            offset={-100}
                            duration={300}
                            className="hover:bg-transparent text-lg !bg-none"
                          >
                            Data Discovery
                          </Link>
                        </li>
                        <li className="transition-all text-black">
                          <Link
                            to="productSourcing"
                            spy
                            smooth
                            offset={-100}
                            duration={300}
                            className="hover:bg-transparent text-lg"
                          >
                            Product Sourcing & Recommendations
                          </Link>
                        </li>
                        <li className="transition-all  text-black">
                          <Link
                            to="introducingBusiness"
                            spy
                            smooth
                            offset={-100}
                            duration={300}
                            className="hover:bg-transparent text-lg"
                          >
                            Introducing Business Opportunities
                          </Link>
                        </li>
                        <li className="transition-all  text-black">
                          <Link
                            to="linkedInMarketing"
                            spy
                            smooth
                            offset={-100}
                            duration={300}
                            className="hover:bg-transparent text-lg"
                          >
                            LinkedIn Marketing Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <li className="text-black">
                      <Link
                        to="pricing"
                        spy
                        smooth
                        offset={-100}
                        duration={300}
                        className="hover:bg-transparent !p-0"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="text-black">
                      <Link
                        to="contact"
                        spy
                        smooth
                        offset={-100}
                        duration={300}
                        className="hover:bg-transparent !p-0"
                      >
                        Contact Us
                      </Link>
                    </li>
                    {/* Login And SignUp Button */}
                    <Link
                      to="login"
                      className="px-6 xl:px-8 py-2 text-center border border-white transition-all bg-info text-white"
                    >
                      Login
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

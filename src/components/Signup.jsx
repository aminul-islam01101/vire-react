/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';
import { ImLocation } from 'react-icons/im';
import signUpImage from '../assets/signup.svg';

const SignUp = () => {
  console.log('login');

  return (
    <div className="py-11 flex flex-col md:flex-row 2xl-minus:gap-28  sm:gap-10 lg:gap-16 xl:gap-28 justify-center ">
      {/* SignUp card */}
      <section className="w-full  md:w-1/2 2xl-minus:w-40 20xl:w-1/3 ">
        <header className='text-center md:text-left'>
          <h2 className="text-4xl text-secondary">
            Talk to Our <br />
            Product Analysis Expert
          </h2>
          <p className="text-secondary text-lg">Have any question for our product ? Ask Us</p>
        </header>
        <article className="py-10">
          <figure>
            <img className="rounded-3xl" src={signUpImage} alt="" />
          </figure>
        </article>
        {/* contacts */}
        <article className="text-primary text-xl space-y-2">
          <h4 className="capitalize text-secondary text-xl">Contact Us</h4>
          <div className="flex items-center text-neutral gap-3">
            <ImLocation className='text-3xl'/>
            <p>Blackburn Road, Houghton Regis, Dunstable, LU5 5BQ, United Kingdom</p>
          </div>
          <div className="flex items-center gap-3 text-neutral">
            <BsFillTelephoneFill />
            <p>Phone : +44 (0) 1582 551 550</p>
          </div>
          <div className="flex items-center gap-3 text-neutral">
            <GrMail />
            <p>Mail : info@business-savvy-uk.co.uk</p>
          </div>
        </article>
      </section>
      {/* login form */}
      <section className="text-primary md:w-1/2 2xl-minus:w-40 20xl:w-1/3  pt-10 sm:pt-0">
        <h2 className="text-center ">Sign Up</h2>
        <form action="" className="mx-auto mb-0 mt-8 space-y-5 md:space-y-8">
          <div className="flex gap-5 items-center w-full ">
            <label htmlFor="firstName" className="text-sm md:text-base font-extralight w-full ">
              <span className='block mb-2'>First Name</span>
              <input
                type="text"
                id="firstName"
                className="w-full rounded-lg border border-opacity-50 border-neutral p-4  text-sm shadow-sm font-normal  focus:border-0 "
                placeholder="Enter First Name"
              />
            </label>
            <label htmlFor="lastName" className="text-sm font-extralight w-full md:text-base ">
            <span className='block mb-2'>Last Name</span>
              
              <input
                type="text"
                id="lastName"
                className="w-full rounded-lg border border-opacity-50 border-neutral  p-4  text-sm shadow-sm font-normal  focus:border-1 focus:border-transparent"
                placeholder="Enter Last Name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email" className="text-base font-extralight md:text-base ">
            <span className='block mb-2'>Email address</span>
              
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-opacity-50 border-neutral p-4 pe-12 text-[16px] shadow-sm font-normal focus:border-1 focus:border-transparent"
                placeholder="Enter email"
              />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="text-base font-extralight md:text-base ">
            <span className='block mb-2'>  Password</span>
         
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border border-opacity-50 border-neutral p-4 pe-12 text-[18px] shadow-sm font-normal  focus:border-1 focus:border-transparent"
                  placeholder="****************"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AiOutlineEye />
                </span>
              </div>
            </label>
          </div>

          <button type="submit" className="btn-large">
            Sign Up
          </button>
        </form>
        <div className="flex items-center w-full py-3">
          <hr className="flex-grow border-t border-gray-300" />
          <div className="px-4 text-xl">Or login with</div>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex items-center justify-center gap-5">
          <FcGoogle className="text-3xl" />
          <BsLinkedin className="text-[#0A66C2] text-3xl" />
        </div>
      </section>
    </div>
  );
};

export default SignUp;

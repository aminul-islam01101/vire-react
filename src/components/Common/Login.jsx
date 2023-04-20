/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  console.log('login');

  return (
    <div className="p-11 flex gap-72">
      {/* login card */}
      <section className="p-24 bg-secondary rounded-3xl">
        <header>
          <img src="" alt="logo" />
        </header>
        <article className="py-20">
          <h1 className="text-accent text-6xl">Start your Journey with Us.</h1>
          <p className="text-base-200 text-xl py-10">
            Discover the World best community of Freelancers and Business owners
          </p>
        </article>
        {/* writers card */}
        <article className="rounded-3xl bg-info p-10">
          <p className="text-base-200 text-base w-3/4 font-light">
            &quot; Simply Unbelievable Im really Satisfied with the service, they have provided.
            This so cool.&quot;
          </p>
          <div className="flex pt-10 gap-5">
            <figure className="">
              <img
                className="w-20  rounded-2xl"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
            </figure>
            <div>
              <h4 className="text-base-200 text-base font-semibold">Blakely Stinson</h4>
              <p className="text-[#84969E]">Freelancer</p>
            </div>
          </div>
        </article>
      </section>
      {/* login form */}
      <section className="text-primary">
        <h2 className="text-center ">Log In</h2>
        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-5">
          <div>
            <label htmlFor="email" className="text-base font-extralight">
              Already have an account?
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-neutral p-4 pe-12 text-[16px] shadow-sm font-normal focus:border-1 focus:border-transparent"
                placeholder="Enter email"
              />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="text-base font-extralight">
              Password
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-neutral p-4 pe-12 text-[18px] shadow-sm font-normal  focus:border-1 focus:border-transparent"
                  placeholder="****************"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </label>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Don&#39;t have an account? &nbsp;
                <a className="underline" href="#">
                  Sign up
                </a>
              </p>
              <p className="text-sm text-gray-500">Forget Password? </p>
            </div>
          </div>

          <button type="submit" className="btn-large">
            Log In
          </button>
        </form>
        <div className="flex items-center w-full py-3">
          <hr className="flex-grow border-t border-gray-300" />
          <div className="px-4">Or login with</div>
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

export default Login;

import React from "react";

const Price = () => {
  return (
    <div className="bg-[#12141D] py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="text-center mb-3 font-bold text-slate-100 md:text-[42px]">
          Make the wise decision <br /> for your business
        </h2>
        <p className="mb-4 text-center text-[#FAFAFA] md:mb-8 xl:mb-12">
          Choose from our affordable 3 packages
        </p>

        <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
          {/* <!-- plan - start --> */}
          <div className="flex flex-col bg-[#282A37] rounded-lg p-4 pt-6">
            <div className="mb-12">
              <div className="mb-2">
                <p className="text-xl text-slate-300"> Starter Plan</p>
                <p className="mt-8 text-slate-50">
                  <span className="text-[42px] text-slate-50 font-bold">
                    $29
                  </span>
                  /month
                </p>
                <p className="mb-8 text-slate-400">
                  This package is suitable for teams 1-15 people.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-slate-50 font-bold my-5">
                  What’s included:
                </span>
                <span className="text-slate-400">
                  10 GB Dedicated Hosting Free
                </span>
                <span className="text-slate-400">
                  Best for Developers, Freelancers
                </span>
                <span className="text-slate-400">1 Year Support</span>
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-8">
              <button className="block rounded-lg border border-slate-900 text-slate-50 px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-300 hover:bg-slate-300 hover:text-slate-800 focus-visible:ring active:text-slate-700 md:text-base">
              Get Started
              </button>
            </div>
          </div>
          {/* <!-- plan - end --> */}
          {/* <!-- plan - start --> */}
          <div className="flex flex-col bg-[#282A37] rounded-lg p-4 pt-6">
            <div className="mb-12">
              <div className="mb-2">
                <p className="text-xl text-slate-300">Basic Plan</p>
                <p className="mt-8 text-slate-50">
                  <span className="text-[42px] text-slate-50 font-bold">
                  $79
                  </span>
                  /month
                </p>
                <p className="mb-8 text-slate-400">
                This package is suitable for teams 1-50 people.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-slate-50 font-bold my-5">
                  What’s included:
                </span>
                <span className="text-slate-400">
                  15 GB Dedicated Hosting Free
                </span>
                <span className="text-slate-400">
                  Best for Developers, Freelancers
                </span>
                <span className="text-slate-400">5 Year Support</span>
                <span className="text-slate-400">Free Custom domain</span>
                <span className="text-slate-400">basic statistics</span>
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-8">
              <button className="block rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-slate-50 px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 hover:bg-gradient-to-r hover:from-[#1a43d6] hover:to-[#9b22d3] hover:transition-all hover:duration-300 focus-visible:ring active:text-slate-700 md:text-base">
              Get Started
              </button>
            </div>
          </div>
          {/* <!-- plan - end --> */}
            {/* <!-- plan - start --> */}
            <div className="flex flex-col bg-[#282A37] rounded-lg p-4 pt-6">
            <div className="mb-12">
              <div className="mb-2">
                <p className="text-xl text-slate-300">Premium Plan</p>
                <p className="mt-8 text-slate-50">
                  <span className="text-[42px] text-slate-50 font-bold">
                  $129
                  </span>
                  /month
                </p>
                <p className="mb-8 text-slate-400">
                This package is suitable for teams 1-100 people.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-slate-50 font-bold my-5">
                  What’s included:
                </span>
                <span className="text-slate-400">
                  20 GB Dedicated Hosting Free
                </span>
                <span className="text-slate-400">
                  Best for Developers, Freelancers
                </span>
                <span className="text-slate-400">Unlimited Support</span>
                <span className="text-slate-400">Free custom domain</span>
                <span className="text-slate-400">Full statistics</span>
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-8">
              <button className="block rounded-lg border border-slate-900 text-slate-50 px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-300 hover:bg-slate-300 hover:text-slate-800 focus-visible:ring active:text-slate-700 md:text-base">
              Get Started
              </button>
            </div>
          </div>
          {/* <!-- plan - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Price;

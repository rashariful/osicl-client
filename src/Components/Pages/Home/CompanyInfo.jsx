import React from "react";

const CompanyInfo = () => {
  return (
    <div className="bg-[#000] pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto mb-32 max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 className="capitalize leading-normal text-slate-50 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-[42] md:leading-snug">
              Write what you want to convey through clear, & authentic writing
            </h1>

            <p className="mb-8 leading-relaxed text-[#FAFAFA] md:mb-12 lg:w-4/5 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random.
            </p>

            <div className="flex  w-52 flex-col gap-2.5 sm:justify-center">
              <button className="inline-block text-center py-4 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center hover:from-[#1a43d6] hover:to-[#9b22d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
                Start 14 Days Free Trial
              </button>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- content - start --> */}
          <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <div className="flex justify-between w-full gap-8 pt-4 px-5">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="text-slate-500 leading-8">Blog Outline</p>
                  <p className="text-slate-500 leading-8">Blog Intro</p>
                  <p className="text-slate-500 leading-8"> Blog Conclusion</p>
                  <p className="text-slate-500 leading-8"> AIDA</p>
                  <p className="text-slate-500 leading-8"> PAS</p>
                  <p className="text-slate-500 leading-8"> Content Rewriter</p>
                </div>
                <div className="flex flex-col gap-5 mt-5">
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[90px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[70px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[82px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[57px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[75px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[87px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[64px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[77px]"></div>
                  <div className="border-b-[5px] rounded-full border-[#E4E8EF] w-[57px]"></div>
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <p className="text-slate-800 font-semibold text-lg">
                    Results
                  </p>
                  <p className="text-slate-500 mb-5">
                    Here's what our AI came up with.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-900 px-3 pt-1 flex flex-col gap-3 rounded-md h-[100px]">
                    <div className="border-b-[5px] rounded-full border-slate-600 max-w-[50px] my-3"></div>
                    <div className="border-b-[5px] rounded-full border-slate-600 max-w-[312px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-600 max-w-[288px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-600 max-w-[254px]"></div>
                  </div>
                  <div className="bg-slate-200 px-3 pt-1 flex flex-col gap-3 rounded-md h-[100px]">
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[50px] my-3"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[312px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[288px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[254px]"></div>
                  </div>
                  <div className="bg-slate-200 px-3 pt-1 flex flex-col gap-3 rounded-md h-[100px]">
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[50px] my-3"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[312px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[288px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[254px]"></div>
                  </div>
                  <div className="bg-slate-200 px-3 pt-1 flex flex-col gap-3 rounded-md h-[100px]">
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[50px] my-3"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[312px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[288px]"></div>
                    <div className="border-b-[5px] rounded-full border-slate-300 max-w-[254px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content - end --> */}
        </section>
      </div>
    </div>
  );
};

export default CompanyInfo;

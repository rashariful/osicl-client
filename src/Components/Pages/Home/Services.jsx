import React from "react";
import img1 from "../../../assets/images/cart1.png";
import img2 from "../../../assets/images/cart2.png";
import img3 from "../../../assets/images/cart3.png";
import img4 from "../../../assets/images/cart4.png";

const Services = () => {
  return (
    <section className="bg-[#000]">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-slate-50 text-2xl font-medium title-font text-center mb-6">
          OUR VISA CATEGORIES
        </h1>
        <p className="mb-16 text-center text-slate-400 md:mb-12 xl:text-lg">
          We Offers Citizenship & Immigration Services.
        </p>
        <div className="grid gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img1} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Tourist Visa
              </h3>
              <p className="text-white">Write a better blog title with our A.I tool.</p>
            </div>
          </div>

          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img2} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
               Business Visa
              </h3>
              <p className="text-white">Generate a paragraph of blog content using Blog Intros tool</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img3} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
              Student Visa
              </h3>
              <p className="text-white">Need an attention-grabbing headline for your article?</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img1} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
               Residency Visa
              </h3>
              <p className="text-white">Write a better conclusions with AI writing tool.</p>
            </div>
          </div>
      
        </div>
        <div>
          <p className="text-center text-slate-50 font-semibold mt-16">
            See more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

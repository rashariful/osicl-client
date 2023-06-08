import React, { useEffect } from "react";
import prof1 from "../../../assets/images/prof-1.png";
import prof2 from "../../../assets/images/prof-2.png";
import prof3 from "../../../assets/images/prof-3.png";
import prof4 from "../../../assets/images/prof-4.png";
import prof5 from "../../../assets/images/prof-5.png";
import prof6 from "../../../assets/images/prof-6.png";
import prof7 from "../../../assets/images/prof-7.png";
import prof8 from "../../../assets/images/prof-8.png";
import { AiOutlineTwitter } from "react-icons/ai";
import Data from "../../../assets/data/cartData.json"

const Testimonial = () => {
  console.log(Data)

  return (
    <section className="bg-[#12141D] pt-20">
      {/* <div>
        {Data.map(cart => {
          return (
            <div className="bg-gray-500 py-3">
              <img className="bg-white w-24"  src={cart.image} alt="" />
              <img className="bg-white w-24"  src={cart.images} alt="" />
              <img className="bg-white w-24" src={cart.icon} alt="" />
              <h2 className="text-4xl text-white">{cart.title}</h2>
              <h2 className="text-4xl text-white">{cart.subtitle}</h2>
            </div>
          )
        })}
      </div> */}
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-slate-50 text-2xl font-medium title-font text-center mb-6">
          What our customers say
        </h1>
        <p className="mb-16 text-center text-slate-400 md:mb-12 xl:text-lg">
          Read why thousands of marketers, writers, and entrepreneurs love us so
          much.
        </p>
        <div className="grid gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof1} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                    darrell name
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof2} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                  Jenny Wilson
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof3} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                  Annette Black
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof4} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                  Marvin McKinney
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof5} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                    darrell name
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof6} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                  Guy Hawkins
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof7} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                  Darrell Steward
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
          {/* cart start */}
          <div className="flex flex-col gap-5 min-w[305px] h-auto bg-[#FFFFFF] p-4 rounded-md">
            <div className="flex w-full px-3 justify-between">
              <div className="flex gap-3 items-center justify-center">
                <img className="w-8 h-8" src={prof8} alt="" />
                <div>
                  <h3 className="text-slate-800 capitalize font-semibold text-xl">
                  Leslie Alexander
                  </h3>
                  <p className="text-slate-500">@drems baby</p>
                </div>
              </div>

              <div>
                <AiOutlineTwitter size={24} color="#00acee" />
              </div>
            </div>
            <p className="text-slate-900 leading-normal text-lg">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-blue-600 text-lg">#another</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

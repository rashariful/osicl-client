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

const WhyChooseUs = () => {
  const dataItems = [
    {
      id: 1,
      title: "this is title",
      des: "this is description",
      img: { prof2 },
    },
  ];

  return (
    <section className="bg-[#12141D] py-20">
      {/* <div>
        {dataItems?.map(cart => {
          return (
            <div className="bg-gray-500 py-3">
              {console.log(cart)}
              
             
              <img className="bg-white w-24" src={cart.img} alt="" />
              <h2 className="text-4xl text-white">{cart.title}</h2>
              <h2 className="text-4xl text-white">{cart.des}</h2>
            </div>
          )
        })}
      </div> */}
      <div className="max-w-screen-xl px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-slate-50 text-2xl font-medium title-font text-center mb-6">
          Why Choose us
        </h1>
        <p className="mb-16 text-center text-slate-400 md:mb-12 xl:text-lg">
          Read why thousands of marketers, writers, and entrepreneurs love us so
          much.
        </p>
        <div className="grid gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-5">
          <div className="bg-white p-5 rounded-lg hover:shadow-xl hover:shadow-blue-600 hover:rotate-3 transition duration-700">
            <img className="w-16 h-auto" src={prof1} alt="" />
            <h3 className="text-slate-700 mt-3 text-lg font-bold">
              No Consultancy Fee
            </h3>
            <p className="text-slate-600">
              We never charge any consultancy Fee.
            </p>
          </div>
          <div  className="bg-white p-5 rounded-lg hover:shadow-xl hover:shadow-blue-600 hover:rotate-3 transition duration-700">
            <img className="w-16 h-auto" src={prof1} alt="" />
            <h3 className="text-slate-700 mt-3 text-lg font-bold">
              Budget-Friendly
            </h3>
            <p className="text-slate-600">
              We never charge any consultancy Fee.
            </p>
          </div>
          <div  className="bg-white p-5 rounded-lg hover:shadow-xl hover:shadow-blue-600 hover:rotate-3 transition duration-700">
            <img className="w-16 h-auto" src={prof1} alt="" />
            <h3 className="text-slate-700 mt-3 text-lg font-bold">
              Made in USA
            </h3>
            <p className="text-slate-600">
              We never charge any consultancy Fee.
            </p>
          </div>
          <div  className="bg-white p-5 rounded-lg hover:shadow-xl hover:shadow-blue-600 hover:rotate-3 transition duration-700">
            <img className="w-16 h-auto" src={prof1} alt="" />
            <h3 className="text-slate-700 mt-3 text-lg font-bold">
              100+ Universities
            </h3>
            <p className="text-slate-600">
              We never charge any consultancy Fee.
            </p>
          </div>
          <div  className="bg-white p-5 rounded-lg hover:shadow-xl hover:shadow-blue-600 hover:rotate-3 transition duration-700">
            <img className="w-16 h-auto" src={prof1} alt="" />
            <h3 className="text-slate-700 mt-3 text-lg font-bold">
              100+ Universities
            </h3>
            <p className="text-slate-600">
              We never charge any consultancy Fee.
            </p>
          </div>
          <div  className="bg-white p-5 rounded-lg hover:shadow-xl hover:shadow-blue-600 hover:rotate-3 transition duration-700">
            <img className="w-16 h-auto" src={prof1} alt="" />
            <h3 className="text-slate-700 mt-3 text-lg font-bold">
              visa success rate 100%
            </h3>
            <p className="text-slate-600">
              We never charge any consultancy Fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

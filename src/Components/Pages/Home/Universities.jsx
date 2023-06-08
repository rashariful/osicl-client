import React from "react";
import uni1 from "../../../assets/images/univercity1.jpeg";
import uni2 from "../../../assets/images/univercity2.jpeg";
import uni3 from "../../../assets/images/univercity3.jpeg";

const Universities = () => {
  return (
    <div className="bg-slate-600">
      <section className="container mx-auto px-3 py-24">
      
        <h3 className="sm:text-3xl text-slate-50 text-2xl capitalize font-medium title-font text-center mb-10">
          Popular universities
        </h3>
        <div className="grid gap-4 grid-cols md:grid-cols-2 lg:grid-cols-3">
          <div  className="hover:-translate-y-3 transition-all duration-500 rounded-lg">
            <img
              src={uni1}
              alt=""
            />
            <h3 className="text-lg text-slate-50 pt-4">
              The University of Arizona
            </h3>
          </div>
          <div  className="hover:-translate-y-3 transition-all duration-500 rounded-lg">
            <img
              src={uni2}
              alt=""
            />
            <h3 className="text-lg text-slate-50 pt-4">
              The University of Arizona
            </h3>
          </div>
          <div  className="hover:-translate-y-3 transition-all duration-500 rounded-lg">
            <img
              src={uni3}
              alt=""
            />
            <h3 className="text-lg text-slate-50 pt-4">
              The University of Arizona
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Universities;

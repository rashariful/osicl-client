import React from "react";
import logo1 from "../../../assets/images/logos/From Amazon.com.svg"
import logo2 from "../../../assets/images/logos/Vector.svg"
import logo3 from "../../../assets/images/logos/Natroma.svg"
import logo4 from "../../../assets/images/logos/Vertex.svg"
import logo5 from "../../../assets/images/logos/Vector-1.svg"
import logo6 from "../../../assets/images/logos/fireli.svg"
import logo7 from "../../../assets/images/logos/Vf.svg"
import logo8 from "../../../assets/images/logos/Vect.svg"
import logo9 from "../../../assets/images/logos/wv.svg"
import logo10 from "../../../assets/images/logos/From wv1.svg"

const LogoCloud = () => {
  return (
    <div className="bg-gradient-to-tr from-[#0C0015] via-[#000] to-[#00001D] py-6 sm:py-8 lg:py-12">
      
      <div className="mx-auto mb-32 max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
          <h2 className="w-full text-center text-2xl font-bold text-gray-50 lg:mb-0 lg:text-3xl">
            Trusted by nearly 5000+ paying customers
          </h2>
        </div>

        <div className="grid mt-16 grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:gap-6">
          {/* <!-- logo - start --> */}
          <div className="flex gap-3 h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
           <img src={logo9} className="w-10 text-slate-800 h-auto" alt="" />
           <img src={logo10} className="w-1/3 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex gap-3 h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
          <img src={logo5} className="w-10 h-auto" alt="" />
           <img src={logo4} className="w-1/3 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex gap-3 h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
          <img src={logo2} className="w-10 h-auto" alt="" />
           <img src={logo1} className="w-1/3 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}
          {/* <!-- logo - start --> */}
          <div className="flex gap-3 h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
          <img src={logo2} className="w-10 h-auto" alt="" />
           <img src={logo1} className="w-1/3 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}
          {/* <!-- logo - start --> */}
          <div className="flex gap-3 h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
          <img src={logo2} className="w-10 h-auto" alt="" />
           <img src={logo1} className="w-1/3 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex gap-3 h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
          <img src={logo2} className="w-10 h-auto" alt="" />
           <img src={logo1} className="w-1/3 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex gap-3 h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
          <img src={logo7} className="w-10 h-auto" alt="" />
           <img src={logo6} className="w-1/4 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- logo - start --> */}
          <div className="flex h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
           <img src={logo3} className="w-1/3 h-auto" alt="" />
          </div>
          {/* <!-- logo - end --> */}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;

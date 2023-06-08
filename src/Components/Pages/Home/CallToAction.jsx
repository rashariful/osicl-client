import React from 'react';

const CallToAction = () => {
    return (
        <div className="bg-[#12141D] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] p-4 sm:flex-row md:p-8">
            <div>
              <h2 className="text-xl font-bold text-slate-100 md:text-2xl">It will hlp you improve your writing</h2>
              <h2 className="text-xl font-bold text-slate-100 md:text-2xl">& bring ideas more cleary.</h2>
            </div>
      
            <button className="inline-block rounded-lg bg-slate-100 px-8 py-3 text-center text-sm font-semibold text-slate-700 outline-none ring-slate-300 transition duration-100 hover:bg-slate-200 focus-visible:ring active:bg-slate-300 md:text-base">Start 14 days free trial</button>
          </div>
        </div>
      </div>
    );
};

export default CallToAction;
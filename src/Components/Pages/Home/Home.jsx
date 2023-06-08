import React from "react";
import Button from "../Button/Button";
import Hero from "./Hero";
import Future from "./Future";
import About from "./About";
import CallToAction from "./CallToAction";
import Price from "./Price";
import LogoCloud from "./LogoCloud";
import CompanyInfo from "./CompanyInfo";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import WhyChooseUs from "./WhyChooseUs";
import Universities from "./Universities";
import HowItWork from "./HowItWork";

const Home = () => {
  return (
    <main>

        {/* hero section */}
        <section> <Hero/> </section>
         {/* LogoCloud section */}
        <section> <Universities/> </section>
         {/* LogoCloud section */}
        <section> <HowItWork/> </section>
         {/* LogoCloud section */}
        <section> <WhyChooseUs/> </section>
        {/* Future section */}
        {/* <section> <Future/> </section> */}
        {/* CompanyInfo section */}
        {/* <section> <About/> </section> */}
        {/* CompanyInfo section */}
        {/* <section> <CompanyInfo/> </section> */}
        {/* Tools section */}
        <section> <Services/> </section>
        {/* Tools section */}
        <section> <Faq/> </section>
        {/* Tools section */}
        {/* <section> <Testimonial/> </section> */}
        {/* CallToAction section */}
        <section> <CallToAction/> </section>
    </main>
  );
};

export default Home;

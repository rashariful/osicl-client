import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg"
          alt="Top Image"
          className="w-full object-cover h-96"
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl ">
          Contact us
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-16 container mx-auto px-3 py-24">
        <div className="w-1/2">
          <img
            src="https://burst.shopifycdn.com/photos/contact-customer-service.jpg?width=1200&format=pjpg&exif=1&iptc=1"
            alt="Left Side Image"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="w-1/2 p-8">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2258107206594!2d90.38657127599397!3d23.739325689200225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b984b4b79dc5%3A0x87cf1d49ddf734bc!2sOSICL!5e0!3m2!1sen!2sbd!4v1686225395028!5m2!1sen!2sbd"
          style={{ border: 0, height: "350px" }}
          className="w-full h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

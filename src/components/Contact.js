import React from 'react';
// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from 'framer-motion'


const Contact = () => {
  return (
    <section className="py-16 lg:py-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* text */}
          <div className="flex-1 mb-16 lg:mb-0 lg:mr-12">
            <div>
              <h4 className="text-2xl lg:text-3xl text-accent font-medium mb-4 lg:mb-6 uppercase tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-4xl lg:text-6xl leading-none mb-8 lg:mb-12">
                Let's Work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form className="flex-1">
            <input
              className="bg-transparent border-b py-3 outline-none w-full text-white placeholder-white border-accent focus:border-accent transition-all mb-6"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full text-white placeholder-white border-accent focus:border-accent transition-all mb-6"
              type="email"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full text-white placeholder-white border-accent focus:border-accent transition-all mb-6"
              placeholder="Your message"
              rows="5"
            ></textarea>
            <button className="bg-accent text-white py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors duration-300">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default Contact;

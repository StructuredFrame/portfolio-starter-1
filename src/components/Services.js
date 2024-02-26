import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

// Services data

const services = [
  {
    name: 'My Services I Provide',
    description:
      'Fill in here for services',
    link: 'learn more',
  },
  {
    name: 'Development',
    description:
      'Fill in here for services',
    link: 'learn more',
  },
  {
    name: 'Inquires',
    description:
      'Fill in here for services',
    link: 'learn more',
  },
  {
    name: 'Product Results',
    description:
      'Fill in here for services',
    link: 'learn more',
  },
];

const Services = () => {
  return (
    <section className='w-fit mx-12' id='services'>
      <div className='container mx-auto'></div>
      <div className='flex flex-col lg:flex-row'>
        { /* text */}
        <div className='flex-1 lg:bg-services bg-no-repeat mix-blend-lighten mb-12 m-auto'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            Information here 1
          </h3>
          <button className='btn btn-sm'>See my work</button>
        </div>
        { /* text */}
        <div>
          { /* services */}
          <ul>
            {
              services.map((service, index) => (
                (
                  <li key={index}>
                  <p>{service.name}</p>
                  </li>
                )
              ))
            }
          </ul>
        </div>
      </div>
    </section >
  );
};

export default Services;

import React from 'react';
// Images
import Image from '../assets/avatar.svg'
// icons
import { FaGithub, FaYoutube, FaDribble } from 'react-icons/fa'
// Type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        { /* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text[110px]'>
            BRAD <span>REYNOLDS</span>
          </motion.h1>
          <motion.div variants={fadeIn('up', 0.4)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] ig:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am</span>
            <TypeAnimation sequence={[
              'a Developer',
              2000,
              'Info 1',
              2000,
              'testing for information',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            <section className='mx-auto font-medium'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries,
              but also the leap into electronic typesetting,
              remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </section>
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            {/* <button className='btn btn-lg'>
              Contact me
            </button> */}

            <button className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 hover:from-blue-600 hover:via-purple-700 hover:to-purple-600 transition-all text-2xl font-bold'>
              Contact me
            </button>

            <a href='/' className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 hover:from-blue-600 hover:via-purple-700 hover:to-purple-600 transition-all text-2xl font-bold'>
              My Portfolio
            </a>
          </motion.div>
          {/* socials */}
          <motion.div variants={fadeIn('up', 0.7)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='/'>
              <FaYoutube />
            </a>
          </motion.div>
        </div>
        { /* image */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial="hidden" whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img className='hover:scale-105 scale-100 transition-all' src={Image} alt='about-me' />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;

import React from 'react';
// import icons
import { BiBriefcase, BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatsquare, BsChatSquareText } from 'react-icons/bs'

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/*Nav Liner */}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          <Link to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            activeclass='active'
            smooth={true}
            spy={true}
            offset={-200}>
            <BiHomeAlt />
          </Link>
          <Link to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            activeclass='active'
            smooth={true}
            spy={true}>
            <BiUser />
          </Link>
          <Link to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            activeclass='active'
            smooth={true}
            spy={true}>
            <BiBriefcase />
          </Link>
          <Link to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            activeclass='active'
            smooth={true}
            spy={true}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;

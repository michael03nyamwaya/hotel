import {useState, useEffect} from 'react';

import LogoWhite from '../assets/img/logo-white.svg'
import LogoDark from '../assets/img/logo-dark.svg'

const Header = () => {
  const [header, setheader]=useState(false)
  useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setheader(true) : setheader(false)
  })
  })
  return <header className={`${header ? 'bg-white py-6 shadow-xl' : 'bg-transparent py8'} fixed w-full z-50 transition-all duration-500`}>
    <div className='container mx-auto mt-4 flex flex-col items-center gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between'>
      {/* logo */}
      <a href='/'>
      {header ? (<img  className='w-[160px]' src={LogoWhite} alt='logo'/>):(<img className='w-[160px]' src={LogoDark} alt='logo'/>)}
      </a>
      {/* nav */}
      <nav className={`${header ? 'text-primary' : 'text-white' } flex gap-x-4 text-[15px] uppercase font-tertiary tracking-[3px] items-center lg:gap-x-8`}>
        <a href='/' className='hover:text-accent transition'>Home</a>
        <a href='/' className='hover:text-accent transition'>Rooms</a>
        <a href='/' className='hover:text-accent transition'>Restraunts</a>
        <a href='/' className='hover:text-accent transition'>Spa</a>
        <a href='/' className='hover:text-accent transition'>Contact</a>
      </nav>
    </div>
  </header>;
};

export default Header;

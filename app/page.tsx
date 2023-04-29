'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import {FiMenu } from 'react-icons/fi'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import LinkedAcc from './shared/LinkedAcc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <>
      <div className='stricky top-0 mt-5 w-full h-20 z-[100] bg-white'>
        <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10'>
          <Link href={'/'}>
            <Image className='w-16 h-16 rounded-full bg-pink-600' src={'/Images/mf.png'} alt='' width={200} height={200}></Image>
          </Link>
          <div>
            <ul className='hidden md:flex items-center'>
              <Link className='text-black ml-10 text-lg  hover:text-pink-600' href={'/'}>Home</Link>
              <Link className='text-black ml-10 text-lg  hover:text-pink-600' href={'https://resume-9nm2qjmwn-mariafajruddin-gmailcom.vercel.app/'}>About</Link>
              <Link className='text-black ml-10 text-lg  hover:text-pink-600' href={'https://panaverse-website-o6a51awpc-mariafajruddin-gmailcom.vercel.app/'}>Courses</Link>
              <Link className='text-black ml-10 text-lg  hover:text-pink-600' href={'https://resume-9nm2qjmwn-mariafajruddin-gmailcom.vercel.app/'}>Contact</Link>
            </ul>
            {/* Mobile Nav Hamburger */}
            <div onClick={handleNav} className='md:hidden'>
              <FiMenu size='20' />
            </div>
          </div>
          {/* Mobile Navbar */}
          
        </div>
        <div className={`${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}`}>
            <div className={`${nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}`}>
              <div className='flex w-full items-center justify-between'>
                <Link href={''}>
                  <Image className='w-16 h-16 rounded-full bg-pink-600' src={'/Images/mf.png'} alt='' width={100} height={100}></Image>
                </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-pink-200 p-3 cursor-pointer'>
                  <GrClose />
                </div>
              </div>
              <div className='my-5'>
                <p className='w-[85%] md:w-[90%] py-4 text-3xl text-pink-600 font-bold'>Maria Fajruddin</p>
              </div>
              <div className='py-4'>
                <ul className='text-lg flex flex-col'>
                  <Link className='py-4' href={'/'}>Home</Link>
                  <Link className='py-4' href={'https://resume-9nm2qjmwn-mariafajruddin-gmailcom.vercel.app/'}>About</Link>
                  <Link className='py-4' href={'https://panaverse-website-o6a51awpc-mariafajruddin-gmailcom.vercel.app/'}>Courses</Link>
                  <Link className='py-4' href={'https://resume-9nm2qjmwn-mariafajruddin-gmailcom.vercel.app/'}>Contact</Link>
                </ul>
                <div className='py-20'> <p className='text-pink-600 text-xl'>Contact Me -{">"} </p>
                  <div className='flex justify-between item-center my-4 w-full'>
                    <LinkedAcc url='https://www.facebook.com/'>
                      <FaFacebook />
                    </LinkedAcc>
                    <LinkedAcc url='https://twitter.com/home'>
                      <FaTwitter />
                    </LinkedAcc>
                    <LinkedAcc url='https://www.linkedin.com/in/maria-fajruddin-272567253/'>
                      <FaLinkedin />
                    </LinkedAcc>
                    <LinkedAcc url='https://github.com/MariaFajruddin1'>
                      <FaGithub />
                    </LinkedAcc>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

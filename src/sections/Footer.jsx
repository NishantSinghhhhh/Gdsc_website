import React from 'react';
import { ReactComponent as Hero1 } from '../Assets/Footer/hero-section 1.svg';
import {ReactComponent as Logo} from '../Assets/Footer/gdsc.svg'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='bg-black h-[75vh] md:h-[95vh] p-[2.3rem] w-[99vw] '>
      <div className='bg-[#E6E4D5] h-[60vh] rounded-[2rem] flex p-[3rem] '>
        <div className='w-[30%] flex flex-col gap-[25px]'>
            <div className='flex items-center'>
                <Logo className='w-[60px] h-[60px]' /> 
                <div className='flex flex-col ml-[10px] '>
                <h4 className='text-lg'>Google Developer Student Clubs</h4> 
                <h5 className='text-sm'>Army Institute of Technology, Pune</h5> 
                </div>
            </div>

            <div className='text-[20px] font-medium mt-[10px] mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div> 
            <div className='text-xl flex space-x-4'>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='text-[#E1306C] text-2xl w-[40px] h-[40px]' /> {/* Instagram color */}
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className='text-[#1DA1F2] text-2xl w-[40px] h-[40px]' /> {/* Twitter color */}
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-[#0077B5] text-2xl w-[40px] h-[40px]' /> {/* LinkedIn color */}
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='text-[#3B5998] text-2xl w-[40px] h-[40px]' /> {/* Facebook color */}
                </a>
        </div>

            </div>


            <div className='flex w-[70%] bg-blue-400n '>
                <div className=' flex flex-col gap-[40px]'>
                    <div className='text-[40px] text-black font-bold'>Explore</div>
                    
                    <div cla>
                    <ul className="list-disc flex flex-col gap-[10px] pl-5  ml-[25px] text-xl">
                        <li>Home</li>
                        <li>About</li>
                        <li>Events</li>
                        <li>Team</li>
                    </ul>
                </div>

                </div>

                <div>
                    <div>2nd</div>
                    <div>2nd Column</div>
                </div>

                <div>
                    <div>3rd </div>
                    <div>3rd COlumn</div>
                </div>
                
            </div>
      </div>
      <div className='mt-[20px] rounded-[20px]'>
        <Hero1 className='w-full h-auto max-w-[100%] max-h-[300px]' />
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import { ReactComponent as Hero1 } from '../Assets/Footer/hero-section 1.svg';
import {ReactComponent as Logo} from '../Assets/Footer/gdsc.svg'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='bg-black h-[100vh] md:h-[105vh] p-[2.3rem] w-[99vw] '>
      <div className='bg-[#E6E4D5] h-[60vh] rounded-[2rem] flex p-[3rem] '>
        <div className='w-[30%] flex flex-col gap-[25px] '>
            <div className='flex items-center'>
                <Logo className='w-[60px] h-[60px]' /> 
                <div className='flex flex-col ml-[10px] '>
                <h4 className='text-lg'>Google Developer Student Clubs</h4> 
                <h5 className='text-sm'>Army Institute of Technology, Pune</h5> 
                </div>
            </div>

            <div className='text-[20px] font-medium mt-[10px] mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div> 
            <div className='text-xl flex space-x-6'>
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


            <div className='flex w-[70%] flex gap-[5rem] ml-[60px]'>
            <div className='flex w-[27%] flex-col gap-[15px]'>
            <div className='text-[40px] text-black font-bold'>Explore</div>
            <div className='flex flex-row justify-between'>
                <div className='w-[20%] mx-auto h-[2px] bg-gradient-to-r from-pink-500 to-red-500 mr-[5px]' /> 
                <div className='w-[80%] mx-auto h-[2px] bg-gradient-to-r from-pink-500 to-red-500' /> 

            </div>
            <div>
                <ul className="list-disc mt-[15px] flex flex-col gap-[15px] pl-5 ml-[25px] text-xl font-medium">
                    <li>Home</li>
                    <li>About</li>
                    <li>Events</li>
                    <li>Team</li>
                </ul>
            </div>
        </div>
            <div className='flex w-[27%] flex-col gap-[15px]'>
            <div className='text-[40px] text-black font-semibold'>Quick Links</div>
            <div className='flex flex-row justify-between'>
                <div className='w-[20%] mx-auto h-[2px] bg-gradient-to-r from-blue-500 to-blue-800 mr-[5px]' /> 
                <div className='w-[80%] mx-auto h-[2px] bg-gradient-to-r from-blue-500 to-blue-800' /> 

            </div>
            <div>
                <ul className="list-disc mt-[15px] flex flex-col gap-[15px] pl-5 ml-[25px] text-xl font-medium">
                    <li>Privacy</li>
                    <li>Terms & Conditions</li>
                    <li>Upcoming Events</li>
                    <li>GDSC Chapter</li>
                </ul>
            </div>
        </div>
            <div className='flex w-[27%] flex-col gap-[15px]'>
            <div className='text-[40px] text-black font-bold'>Get in Touch</div>
            <div className='flex flex-row justify-between'>
                <div className='w-[20%] mx-auto h-[2px] bg-gradient-to-r from-green-500 to-green-800 mr-[5px]' /> 
                <div className='w-[80%] mx-auto h-[2px] bg-gradient-to-r from-green-500 to-green-800' /> 

            </div>
            <div>
            <div className="p-8 rounded-lg "> {/* Increased padding */}
                <ul className="space-y-6"> {/* Increased space between items */}
                    <li className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-3 mr-4"> {/* Increased padding for the icon */}
                        <IoLocationOutline className="text-white text-2xl" /> {/* Increased icon size */}
                    </div>
                    <span className="text-xl">AIT Pune</span> {/* Increased font size */}
                    </li>
                    <li className="flex items-center">
                    <div className="bg-yellow-500 rounded-full p-3 mr-4"> {/* Increased padding for the icon */}
                        <IoCallOutline className="text-white text-2xl" /> {/* Increased icon size */}
                    </div>
                    <span className="text-xl">+91 9876543210</span> {/* Increased font size */}
                    </li>
                    <li className="flex items-center">
                    <div className="bg-green-500 rounded-full p-3 mr-4"> {/* Increased padding for the icon */}
                        <IoMailOutline className="text-white text-2xl" /> {/* Increased icon size */}
                    </div>
                    <span className="text-xl">Email</span> {/* Increased font size */}
                    </li>
                </ul>
                </div>

            </div>
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

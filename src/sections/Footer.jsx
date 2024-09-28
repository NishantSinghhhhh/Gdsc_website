import React from 'react';
import { ReactComponent as Hero1 } from '../Assets/Footer/hero-section 1.svg';
import {ReactComponent as Logo} from '../Assets/Footer/Group 48096047.svg'

const Footer = () => {
  return (
    <div className='bg-black h-[75vh] md:h-[95vh] p-[2.3rem] w-[99vw] '>
      <div className='bg-[#E6E4D5] h-[50vh] rounded-[2rem] flex p-[3rem] '>
        <div className='w-[30%]'>
            <div className='flex items-center'>
            <Logo className='w-[100px] h-[100px] bg-blue-400' /> {/* Adjust width and height */}
                <div className='flex flex-col ml-[10px]'>
                <h4 className='text-xl'>Google Developer Student Clubs</h4> {/* Increased font size */}
                <h5 className='text-lg'>Army Institute of Technology, Pune</h5> {/* Increased font size */}
                </div>
            </div>
            
            <div className='text-lg mt-[10px]'>medium</div> {/* Increase font size for medium */}
            <div className='text-lg'>icons</div> {/* Increase font size for icons */}
        </div>


            <div className='flex w-[70%] bg-blue-400'>
                <div>
                    <div>1st</div>
                    <div>1st Column</div>
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

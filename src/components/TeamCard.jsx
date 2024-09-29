import React from 'react';
import ImageSrc from '../Assets/Team/18143e5b4f128b3c9c3a11604cdeaa42.jpeg';
import GdscLogo from '../Assets/Footer/gdsclogo.png'; // Import PNG image

const TeamCard = () => {
  return (
    <>
      <div className='border absolute border-black h-[20rem] w-[20rem]'>
        <div>
          <div className='border-b border-black bg-[#E5E5E5] h-[2rem] w-full flex items-center gap-[20px] px-2'>
            <div className='flex space-x-1'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
              <div className='w-3 h-3 rounded-full bg-blue-500'></div>
            </div>
            <div>insta@id</div>
          </div>
          <div className="h-[17.8rem] w-full">
            <img src={ImageSrc} alt="Team" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      
      <div className='border relative left-[10rem] flex flex-col top-[17rem] border-black h-[10rem] w-[20rem] items-center'>
        <div className='bg-[#FABD03] border-b border-black h-[2rem] w-full flex items-center justify-center'>
          GDSC LEAD
        </div>
        <div className='bg-white w-full h-[10rem] flex flex-col justify-center items-center'>
          <div className='text-left font-bold text-2xl mb-[10px]'>
            Hi!!!
            <br/>
            I’m Arshia Thakur Garg
          </div>
          <div className='flex justify-end items-center w-full pr-[10px] gap-[5px]'>
            <img src={GdscLogo} alt="GDSC Logo" className="h-[1rem] w-[2rem]" /> 
            <div className='text-right'>
              <h4 className='text-[10px]'>Google Developer Student Clubs</h4> 
              <h5 className='text-[8px]'>Army Institute of Technology, Pune</h5> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collaborate = () => {
  return (
    <>
<div className='bg-black w-[99vw] p-[2.3rem] mb-[-2rem]'>
    <div className='bg-[#E6E4D5] rounded-[2rem] w-full p-4 md:p-8'>
      {/* Desktop view */}
      <div className='hidden md:flex justify-between items-center'>
        <div className='text-5xl font-bold leading-tight text-black'>
          Want To Collaborate
          <br />
        
          Just Fill Out The Form
        </div>
        <button className="flex items-center justify-between w-[250px] h-[70px] px-4 bg-white border-2 border-black rounded-full overflow-hidden hover:cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105">
  <span className="text-black font-semibold text-lg">Fill the Form</span>
  <div className="flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full">
    <ArrowRight className="w-6 h-6 text-black" />
  </div>
</button>

      </div>

      {/* Mobile view */}
      <div className='md:hidden flex flex-col items-center justify-center min-h-[80vh]'>
        <div className='text-4xl font-bold mb-8 text-center leading-tight'>
          Want To Collaborate
          <br />
          Just Fill Out The Form
        </div>
        <button className="flex items-center justify-between w-64 h-14 px-4 bg-white border-2 border-black rounded-full overflow-hidden hover:cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105">
          <span className="text-black font-semibold text-lg">Fill the Form</span>
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-300 rounded-full">
            <ArrowRight className="w-6 h-6 text-black" />
          </div>
        </button>
      </div>
</div>
    </div>
    </>
  );
};

export default Collaborate;
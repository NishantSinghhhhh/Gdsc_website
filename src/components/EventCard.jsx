import React from 'react';
import Icon1 from '../Assets/Events/flutter-icon-207x256-jjsv14d2.png';
import Icon2 from '../Assets/Events/Frame 430.svg';
import InstaPost from '../Assets/Events/flutter jam.svg';

const EventCard = () => {
  return (
    <div className="border rounded-3xl w-full max-w-md mx-auto md:max-w-2xl lg:max-w-3xl border-black flex flex-col md:flex-row shadow-lg p-4">
      <div className="flex flex-col gap-4 items-center justify-center rounded-3xl w-full md:w-2/5 mb-4 md:mb-0">
        <div className="mb-4 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
          <img src={Icon1} alt="Icon 1" className="w-full h-full object-cover" />
        </div>
        
        <div className="rounded-full w-[100%] h-[40px] max-w-xs bg-white flex items-center justify-between p-2  border border-black">
          <h3 className="text-[12px] flex justify-center text-center items-center font-bold leading-[1.2]">
            FLUTTER STUDY JAMS
          </h3>
          
          <div className="w-[2.7rem] h-[2.5rem]  rounded-full overflow-hidden">
            <img src={Icon2} alt="Icon 2" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
      
      <div className="rounded-3xl w-full md:w-3/5 md:ml-4">
        <img src={InstaPost} alt="Instagram Post" className="w-full h-auto object-cover rounded-3xl" />
      </div>
    </div>
  );
}

export default EventCard;
import React from 'react';
import EventCard from '../components/EventCard';
import img from '../Assets/Events/Frame 430.svg';
import Icon2 from '../Assets/Events/Frame 430 (1).svg';
import backgroundImage from '../Assets/Events/Frame 430 (2).svg'; // Import your background image

const Events = () => {
  const eventsData = [
    { imageSrc: img, title: 'FLUTTER STUDY JAMS' },
    { imageSrc: img, title: 'FLUTTER STUDY JAMS' },
    { imageSrc: img, title: 'FLUTTER STUDY JAMS' },
    { imageSrc: img, title: 'FLUTTER STUDY JAMS' },
    { imageSrc: img, title: 'FLUTTER STUDY JAMS' },
    { imageSrc: img, title: 'FLUTTER STUDY JAMS' },
  ];

  return (
    <div
      className="bg-black min-h-screen p-4 sm:p-6 w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Make the image cover the entire div
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent it from repeating
      }}
    >
      <div className='bg-[#E6E4D5] h-auto rounded-[2rem] flex flex-col items-center p-4 sm:p-8 overflow-hidden'>
        <div>
          <h1 className='mb-6 sm:mb-8 rubik-mono-one-regular text-green-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[120px] text-center'>
            OUR EVENTS
          </h1>
          <p className='text-center px-4 sm:px-0'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit soluta facere sapiente adipisci incidunt recusandae. Dolorum quidem unde atque.
          </p>
        </div>
        {/* Events card */}
        <div className='mt-10 justify-center flex flex-wrap gap-8'>
          {eventsData.map((event, index) => (
            <div key={index} className='flex justify-center'>
              <EventCard
                imageSrc={event.imageSrc}
                title={event.title}
                className='w-full max-w-xs' // Ensuring max width for responsiveness
              />
            </div>
          ))}
        </div>

        <div className='mt-[4rem]'>
          <div className="rounded-full w-[18rem] h-[50px] max-w-xs bg-white flex items-center text-center justify-between p-2 border border-black">
            <h3 className="text-[16px] ml-[3rem] flex justify-center text-center items-center font-bold leading-[1.2]">
              EXPLORE EVENTS
            </h3>
            
            <div className="-mr-[1rem] w-[3rem] h-[3rem] rounded-full overflow-hidden transform transition-transform duration-300 hover:-rotate-45">
              <img src={Icon2} alt="Icon 2" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;

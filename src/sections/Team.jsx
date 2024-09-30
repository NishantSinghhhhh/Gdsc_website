import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import TeamCard from '../components/TeamCard'; 
import NavigationButtons from '../components/NavigationButtons';

const Team = () => {
  const teamMembers = [
    { id: 1, instaId: "insta@id1", image: 'path_to_image1.jpeg' },
    { id: 2, instaId: "insta@id2", image: 'path_to_image2.jpeg' },
    { id: 3, instaId: "insta@id3", image: 'path_to_image3.jpeg' },
    { id: 4, instaId: "insta@id4", image: 'path_to_image4.jpeg' },
    { id: 5, instaId: "insta@id5", image: 'path_to_image5.jpeg' },
    { id: 6, instaId: "insta@id6", image: 'path_to_image6.jpeg' },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(50); // Default value

  useEffect(() => {
    const updateCenterSlidePercentage = () => {
      const width = window.innerWidth;

      if (width >= 1090) { // Large screens
        setCenterSlidePercentage(40); // 1 card visible
      } else if (width >= 822) { // Medium screens
        setCenterSlidePercentage(70); // 2 cards visible
      } else { // Small screens
        setCenterSlidePercentage(100); // 1 card visible
      }
    };

    updateCenterSlidePercentage(); // Set initial value
    window.addEventListener('resize', updateCenterSlidePercentage); // Update on resize

    return () => {
      window.removeEventListener('resize', updateCenterSlidePercentage); // Cleanup
    };
  }, []);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className='bg-black min-h-screen p-4 sm:p-6 w-full'>
      <div className='bg-[#E6E4D5] rounded-[2rem] flex flex-col items-center p-4 sm:p-8 overflow-hidden'>
        <h1 className='mb-6 sm:mb-8 rubik-mono-one-regular text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[120px] text-center' style={{ letterSpacing: '-0.1em' }}>
          MEET OUR TEAM
        </h1>

        {/* Mobile view: Grid layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-1 gap-4 w-full h-[200rem]">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              <TeamCard instaId={member.instaId} image={member.image} />
            </div>
          ))}
        </div>

        {/* Desktop view: Carousel */}
        <div className="hidden md:block w-full">
          <Carousel
            selectedItem={selectedIndex}
            onChange={(index) => setSelectedIndex(index)}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={false}
            showIndicators={false}
            dynamicHeight={false}
            centerMode={true}
            centerSlidePercentage={centerSlidePercentage} // Dynamic percentage
            className="w-full h-[40rem] flex items-center justify-center"
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="flex justify-center h-[30rem] w-full max-w-[300px] mx-auto"> {/* Responsive card width */}
                <TeamCard instaId={member.instaId} image={member.image} />
              </div>
            ))}
          </Carousel>
          <NavigationButtons handlePrev={handlePrev} handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Team;

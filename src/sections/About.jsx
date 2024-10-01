import React from 'react';
import backgroundImage from '../Assets/Events/Frame 430 (2).svg';
import vision from  '../Assets/About/Vision.png';
import mission from  '../Assets/About/Mission.png';
import people from  '../Assets/About/People.png';

const About = () => {
  return (
    <div
      className="bg-black p-4 sm:p-6 w-full"
    >
        <div className=" flex flex-col items-center bg-[#E6E4D5] rounded-[2rem] p-4 sm:p-8 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-8">
            <span className=" text-9xl font-bolder text-[#4385F3] rubik-mono-one-regular">ABOUT</span>
            <span className="ml-10 text-9xl font-bolder text-[#4385F3] rubik-mono-one-regular">US</span>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full p-6 space-y-8 md:space-y-0">
            {/* Image Section */}
            <div className="md:w-[60%] mr-[12%] flex justify-center items-center">
            <img
                src={people}
                alt="Teamwork Illustration"
                className="w-full h-auto rounded-lg shadow-md"
            />
            </div>

            {/* Text Section */}
            <div className="md:w-[40%] space-y-6">
            {/* GDSC AIT Description */}
            <div>
                <h2 className="text-3xl font-bold text-black text-[36px]">GDSC AIT</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="169" height="6" viewBox="0 0 167 6" fill="none">
                <rect x="0.877563" y="0.196228" width="42" height="5.53846" fill="#E94436"/>
                <rect x="42.3776" y="0.196228" width="42" height="5.53846" fill="#109D58"/>
                <rect x="83.8776" y="0.196228" width="42" height="5.53846" fill="#FABC05"/>
                <rect x="125.378" y="0.196228" width="42" height="5.53846" fill="#4385F3"/>
                </svg>
                <p className="mt-4 text-lg text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illoSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                </p>
            </div>

            {/* Vision */}
            <div className="flex-col items-center justify-center">
                {/* Relative parent to position the text on top of the SVG */}
                <div className="relative -z-0 pb-14">
                    {/* The SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="549" height="179" viewBox="0 0 549 179" fill="none">
                    <path d="M311.048 0.590729H537.624C543.509 0.590729 548.28 5.36152 548.28 11.2466V161.612C548.28 170.767 540.859 178.188 531.704 178.188H17.8558C8.70123 178.188 1.28003 170.767 1.28003 161.612V48.9201C1.28003 39.8496 8.57068 32.4636 17.6405 32.3458L268.237 29.0913C272.441 29.0367 276.467 27.3864 279.501 24.4745L299.569 5.20894C302.656 2.24555 306.769 0.590729 311.048 0.590729Z" fill="white" stroke="black" stroke-width="1.18398"/>
                    </svg>

                    {/* The text overlay */}
                    <div className="absolute top-[7%] left-[80%] flex-col  justify-center z-10 text-black text-4xl font-bold">VISION
                    </div>
                    <div className="absolute top-[30%] left-[4%] flex-col  justify-center z-10 text-gray-700 text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    </div>
                </div>
                <div className="relative -z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="549" height="180" viewBox="0 0 549 180" fill="none">
                <path d="M238.512 0.879272H11.9359C6.05081 0.879272 1.28003 5.65007 1.28003 11.5351V161.901C1.28003 171.055 8.70123 178.477 17.8558 178.477H531.704C540.859 178.477 548.28 171.055 548.28 161.901V49.2087C548.28 40.1381 540.989 32.7521 531.92 32.6343L281.323 29.3798C277.119 29.3252 273.093 27.6749 270.059 24.763L249.991 5.49749C246.904 2.53409 242.791 0.879272 238.512 0.879272Z" fill="white" stroke="black" stroke-width="1.18398"/>
                </svg>

                    {/* The text overlay */}
                    <div className="absolute top-[7%] left-[4%] flex-col  justify-center z-10 text-black text-4xl font-bold">MISSION</div>
                    <div className="absolute top-[37%] left-[4%] flex-col  justify-center z-10 text-gray-700 text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default About;
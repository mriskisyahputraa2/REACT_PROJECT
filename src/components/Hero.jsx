import React from "react";
// import Typed from 'react-typed';

function Hero() {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#31E1F7] font-bold p-2 uppercase">
          grow with cool websites
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl  font-bold md:py-6">
          Grow with a website
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Fast, flexible financing 
            </p>
            {/* <Typed 
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            string={['BTB', 'BTC', 'SASS']}
            tyoeSpeed={120}
            backSpeed={140}
            loop
          /> */}
          </div>
          <p className="md:text-2xl texr-xl font-bold text-gray-500">
          Cheap but not cheap, safe and reliable
          </p>
          <button className="bg-[#31E1F7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;

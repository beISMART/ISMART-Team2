import React from 'react';
import Image from 'next/image';

const RectangleButton = () => {
  const handleClick = () => {
    // Handle button click event here
  };

  return (
    <div className="relative top-[30px] right-[-1000px]">
      <button
        className="relative w-[245px] h-[80px] border-2 rounded-[20px] bg-secondary text-white duration-300"
        onClick={handleClick}
      >
        <span className="text-white absolute top-[40px] left-[30px] ">SJES2023</span>
        <div className='absolute right-[10px] top-[-10px]'>
          <Image
            src="/man.png" // Replace with the path to your image in the public folder
            alt="My_Image"
            width={80} // Specify the desired width of the image
            height={80} // Specify the desired height of the image
          />
        </div>
        
        {/* Second rectangle frame */}
        <div
          className="absolute h-7 w-[140px] inset-2 bg-primary rounded-[20px]"
          style={{ pointerEvents: 'none' }}>
            <span className="text-black text-center ">Mr. Anish</span>
          </div>
      </button>
    </div>
  );
};

export default RectangleButton;

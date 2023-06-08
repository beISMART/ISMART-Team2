import React from 'react';

export default function RectangleFrame() {
  return (
    <div className="flex">
      <div className="h-[1024px] w-[1440px] bg-primary border-[1px] border-secondary rounded-[20px] absolute left-[148px] top-[22px] flex flex-col items-center justify-center">
        <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">NOTIFICATION</div>
        <div className="flex justify-center items-center h-full">
          
        </div>
      </div>

      <div className="h-[289px] w-[585px] bg-white border-[1px] border-secondary rounded-[20px] absolute left-[180px] top-[400px] flex flex-col items-center justify-center mt-8">
        <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">Staff</div>
        <div className="flex justify-center items-center h-full">
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div> {/* Profile Picture */}
          <div className="text-dark-text text-[24px] font-semibold">Jane Smith</div> {/* Name */}
          <div className="h-[289px] w-[585px] bg-white border-[1px] border-secondary rounded-[20px] absolute left-[08px] top-[300px] flex flex-col items-center justify-center mt-08">
            <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">Student</div>
            <div className="flex justify-center items-center h-full">
              <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div> {/* Profile Picture */}
              <div className="text-dark-text text-[24px] font-semibold">Jane Smith</div> {/* Name */}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[289px] w-[585px] bg-white border-[1px] border-secondary rounded-[20px] absolute left-[800px] top-[700px] flex flex-col items-center justify-center mt-10">
        <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">Admin</div>
        <div className="flex justify-center items-center h-full">
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div> {/* Profile Picture */}
          <div className="text-dark-text text-[24px] font-semibold">Jane Smith</div> {/* Name */}
        </div>
      </div>

      <div className="h-[289px] w-[585px] bg-white border-[1px] border-secondary rounded-[20px] absolute left-[780px] top-[400px] flex flex-col items-center justify-center mt-7">
        <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">Co-Admin</div>
        <div className="flex justify-center items-center h-full">
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div> {/* Profile Picture */}
          <div className="text-dark-text text-[24px] font-semibold">Jane Smith</div> {/* Name */}
        </div>
      </div>
    </div>
  );
}
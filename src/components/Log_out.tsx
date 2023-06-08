import React from 'react';

const LogoutPage: React.FC = () => {
  return (
    <div className="relative bg-secondary w-[656px] h-[260px] rounded-[20px] border border-brand">
      <p className="text-center font-Robotoslab font-bold text-brand text-[22px] px-20 py-20">
        Are you sure you want to log out?
      </p>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center py-4">
        <button className="mx-14  px-14 py-1 hover:text-blue-800 bg-brand hover:bg-primary text-whiteborder border-[2px] border-white  hover:border-brand rounded-[10px]">
          Yes
        </button>
        <button className="mx-14 px-14 py-1 hover:text-blue-800 bg-brand hover:bg-primary text-white border-[2px] border-white  hover:border-brand rounded-[10px]">
          No
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;

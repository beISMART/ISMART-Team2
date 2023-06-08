import React from 'react';

const ResetButton = () => {
  return (
    <div className="absolute" style={{ top: '430px', right: '420px' }}>
      <button className="px-[208px] py-2 hover:text-blue-800 bg-brand hover:bg-primary text-white border-[2px] border-white hover:border-brand rounded-[10px]">
        Reset
      </button>
    </div>
  );
};

export default ResetButton;

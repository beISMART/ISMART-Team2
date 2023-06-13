"use client"
import React, { useState } from 'react';

const RectangleFrame = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!adminId || !password) {
      setErrorMessage('Please fill in the required fields.');
    } else {
      // Perform the login logic here
      // ...
      setErrorMessage('');
    }
  };

  return (
    <div className="h-[400px] w-[800px] absolute right-[250px] top-[120px] bg-white border-[1px] border-secondary rounded-[20px]  flex flex-col items-center justify-center">
      <div className="text-dark-text underline text-[30px] font-serif text-center absolute top-[3px]">
        ADMIN LOGIN
      </div>
      <div className="flex justify-center items-center h-full flex-col">
        <div className="relative w-[450px] mb-20 bottom-[-80px]">
          <input
            type="text"
            placeholder="ADMIN ID*"
            className="block w-full text-lg text-[16px] text-black  border-b-2 font-serif border-blue-500 outline-none"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </div>
        <div className="relative w-[450px] bottom-[-30px] ">
          <input
            type="password"
            placeholder="PASSWORD*"
            className="block w-full text-lg  text-[16px] text-black border-b-2 font-serif border-blue-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center items-center container pb-14">
        <button
          className="px-5 py-2 text-xl font-serif  hover:text-blue-800 bg-brand hover:bg-primary text-white shadow-sm rounded-[15px] w-[450px] h-[45px] border-secondary border-[1px]"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </div>
      {errorMessage && (
        <div className="text-red-500 absolute top-[250px] mt-2">{errorMessage}</div>
      )}
    </div>
  );
};

export default RectangleFrame;

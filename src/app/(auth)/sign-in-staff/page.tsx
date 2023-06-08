import React from 'react';
import Login_Button from '@/components/Login_Button';
import Forgot_password_Button from '@/components/Forgot_password_Button';
import Image from 'next/image';
import Staff_frame_with_logo from '@/components/Staff_frame_with_logo';

const Page = () => {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Staff_frame_with_logo />
        <div style={{position:'absolute',top:180, right:630}}>   <Image
              src="/stafflogo.png" // Replace with the path to your image in the public folder
              alt="My Image"
              width={90} // Specify the desired width of the image
              height={90} // Specify the desired height of the image
            /></div>
        <div style={{ position: 'absolute', top: 400, right: 425 }}>
          <Login_Button />
          
        </div>
        <div style={{position:'absolute',top:480, right:580}}>
        <Forgot_password_Button/> </div>
        
      </div>
    </div>
  );
};

export default Page;

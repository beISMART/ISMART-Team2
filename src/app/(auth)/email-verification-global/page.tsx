import Email_verificaton_after_forgot_security_answer from '@/components/Email_verificaton_after_forgot_security_answer'
import React from 'react'
import Image from 'next/image';
import Ok_button from '@/components/Ok_button';

const page = () => {
  return (
    <div>
        <Email_verificaton_after_forgot_security_answer/>
        <div style={{position:'absolute',top:180, right:640}}>   <Image
              src="/notification_logo.png" // Replace with the path to your image in the public folder
              alt="My Image"
              width={45} // Specify the desired width of the image
              height={45} // Specify the desired height of the image
            /></div>
             <div style={{position:'absolute',top:450, right:560}}><Ok_button/></div>
    </div>
  )
}

export default page
import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-primary relative">
      <div style={{ position: 'absolute', top: 20, left: -10 }}>
        <Image
          src="/ISMARTLOGO.png" // Replace with the path to your image in the public folder
          alt="My_Image"
          width={250} // Specify the desired width of the image
          height={250} // Specify the desired height of the image
        />
      </div>
      {children}
    </div>
  );
}

"use client"
import { useState } from "react";

const Rectangle = () => {
    const [inputText, setInputText] = useState('');
  
    const handleChange = (event: { target: { value: any; }; }) => {
      const text = event.target.value;
      const truncatedText = text.slice(0, 1000);
      setInputText(truncatedText);
    };
  
    const wordCount = inputText.trim().split(/\s+/).length;

  return (
    <div className="relative h-[250px] w-[500px] rounded-[5px] bg-secondary">
      <textarea
        className="absolute inset-0 w-full h-full p-4 rounded-[10px] bg-transparent text-white resize-none outline-none "
        placeholder="Enter description..."
        value={inputText}
        onChange={handleChange}
       
      />
      <p className="absolute bottom-4 left-4 text-white">
        {wordCount}/200 words
      </p>
      <button className="absolute bottom-2 right-2 bg-brand hover:bg-primary hover:text-brand px-4 py-2 text-white rounded-md" placeholder="Set Remarks">
        Set Remarks
      </button>
    </div>
  );
};

export default Rectangle;
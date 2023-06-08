

export default function RectangleFrame() {
    return (
      <div className="h-[400px] w-[800px] absolute right-[250px] top-[120px] bg-white border-[1px] border-secondary rounded-[20px]  flex flex-col items-center justify-center">
        <div className="text-dark-text underline text-[30px] font-serif text-center absolute top-[3px]">FORGOT PASSWORD</div>
        <div className="flex justify-center items-center h-full flex-col">
            <div className="text-black font-serif text-[20px] absolute right-[355px] top-[120px]">What is your favourite animal?</div>
          <div className="relative w-[450px] mb-21 bottom-[-10px]">
            <input type="text" placeholder="Your Answer" className="block w-full text-lg text-[16px] text-black  border-b-2 font-serif border-blue-500  " />
          </div>
          
        </div>
        <div className="flex justify-center items-center ">
        </div>
      </div>
    );
  }
  
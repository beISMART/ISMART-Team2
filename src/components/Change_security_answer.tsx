

export default function RectangleFrame() {
    return (
      <div className="h-[400px] w-[800px] absolute right-[250px] top-[120px] bg-white border-[1px] border-secondary rounded-[20px]  flex flex-col items-center justify-center">
        <div className="text-dark-text underline text-[30px] font-serif text-center absolute top-[3px]">CHANGE SECURITY ANSWER</div>
        <div className="flex justify-center items-center h-full flex-col">
          <div className="text-black font-serif">What is your favourite animal?
          <div className="relative w-[450px] mb-20 bottom-[-10px]">
            <input type="text" placeholder="Reset your new answer" className="block w-full text-lg text-[16px] text-black  border-b-2 font-serif border-blue-500  " />
          </div></div>

          <div className="text-black absolute right-[420px] top-[200px] font-serif">What is your favourite food?</div>
          <div className="relative w-[450px] bottom-[20px] ">
            <input type="password" placeholder="Reset your new answer" className="block w-full text-lg  text-[16px] text-black border-b-2 font-serif border-blue-500 " />
          </div>
        </div>
        <div className="flex justify-center items-center ">
        </div>
      </div>
    );
  }
  
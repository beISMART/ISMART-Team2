
export default function RectangleFrame() {
  return (
    <div className="h-[400px] w-[800px] bg-white border-[1px] border-secondary rounded-[20px] absolute right-[250px] top-[120px] flex flex-col items-center justify-center">
      <div className="text-dark-text underline text-[30px] font-serif text-center absolute top-[1px]">CHANGE PASSWORD</div>
      <div className="flex justify-center items-center h-full flex-col">
        <div className="relative w-[450px] mb-[150px] bottom-[10]">
          <input type="text" placeholder=" ENTER  EXISTING PASSWORD *" className="block w-full text-lg text-[16px] text-black  border-b-2 font-serif border-blue-500  " />
        </div>
        <div className="text-dark-text  text-[20px] font-serif text-center absolute top-[295px] right-[270px]">  </div>
        <div className="absolute w-[450px]  bottom-[200px] ">
          <input type="email" placeholder="ENTER NEW PASSWORD *" className="block w-full text-black text-lg  text-[16px] border-b-2 font-serif border-blue-500 " />
        </div>
        <div className="absolute w-[450px] bottom-[140px] ">
          <input type="password" placeholder="CONFIRM NEW PASSWORD *" className="block w-full text-lg  text-[16px] text-black  border-b-2 font-serif border-blue-500 " />
        </div>
      </div>
      
    </div>
  );
}

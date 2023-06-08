
export default function RectangleFrame() {
  return (
    <div className="h-[400px] w-[800px] bg-white border-[1px] border-secondary rounded-[20px] absolute right-[250px] top-[120px] flex flex-col items-center justify-center">
      <div className="text-dark-text underline text-[30px] font-serif text-center absolute top-[1px]">STUDENT LOGIN</div>
      <div className="flex justify-center items-center h-full flex-col">
        <div className="relative w-[450px] mb-[100px] bottom-[10]">
          <input type="text" placeholder="STUDENT NAME" className="block w-full text-lg text-[16px] text-black  border-b-2 font-serif border-blue-500  " />
        </div>
        <div className="text-dark-text  text-[20px] font-serif text-center absolute top-[295px] right-[270px]"> <div className="text-black font-serif text-center absolute top-[-125px] right-[-130px]"> (or) </div> </div>
        <div className="absolute w-[450px]  bottom-[190px] ">
          <input type="email" placeholder="EMAIL" className="block w-full text-black text-lg  text-[16px] border-b-2 font-serif border-blue-500 " />
        </div>
        <div className="absolute w-[450px] bottom-[140px] ">
          <input type="password" placeholder="PASSWORD *" className="block w-full text-lg  text-[16px] text-black  border-b-2 font-serif border-blue-500 " />
        </div>
      </div>
      
    </div>
  );
}

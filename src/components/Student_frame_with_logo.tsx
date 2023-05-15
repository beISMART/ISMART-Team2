import Image from "next/image";

export default function RectangleFrame() {
  return (
    <div className="h-[616px] w-[1173px] bg-white border-[1px] border-secondary rounded-[20px] absolute left-[148px] top-[221px] flex flex-col items-center justify-center">
      <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">STUDENT LOGIN</div>
      <div className="flex justify-center items-center h-full flex-col">
        <div className="relative w-[500px] mb-20 bottom-[-250px]">
          <input type="text" placeholder="STUDENT NAME" className="block w-full text-lg text-[16px] text-black  border-b-2 font-serif border-blue-500  " />
        </div>
        <div className="text-dark-text  text-[20px] font-serif text-center absolute top-[295px] right-[270px]"> (or) </div>
        <div className="absolute w-[500px]  bottom-[270px] ">
          <input type="email" placeholder="EMAIL" className="block w-full text-black text-lg  text-[16px] border-b-2 font-serif border-blue-500 " />
        </div>
        <div className="absolute w-[500px] bottom-[170px] ">
          <input type="password" placeholder="PASSWORD *" className="block w-full text-lg  text-[16px] text-black  border-b-2 font-serif border-blue-500 " />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Image src="/borcelle.svg" alt="newimg" width={500} height={500} />
      </div>
    </div>
  );
}

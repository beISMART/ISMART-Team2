import Image from "next/image";

export default function RectangleFrame() {
  return (
    <div className="h-[616px] w-[1173px] bg-white border-[1px] border-secondary rounded-[20px] absolute left-[148px] top-[221px] flex flex-col items-center justify-center">
      <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">ADMIN LOGIN</div>
      <div className="flex justify-center items-center h-full flex-col">
        <div className="relative w-[500px] mb-20 bottom-[-250px]">
          <input type="text" placeholder="ADMIN ID" className="block w-full text-lg text-[16px] border-b-2 font-serif border-blue-500  " />
        </div>
        <div className="relative w-[500px] bottom-[-250px] ">
          <input type="password" placeholder="PASSWORD" className="block w-full text-lg  text-[16px] border-b-2 font-serif border-blue-500 " />
        </div>
      </div>
      <div className="flex justify-center items-center ">
      <Image src="/public/ISMART.png" alt="ISMART logo" width={195} height={103}  />
      </div>
    </div>
  );
}

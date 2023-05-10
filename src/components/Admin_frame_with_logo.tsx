import Image from "next/image";

export default function RectangleFrame() {
  return (
    <div className="h-[616px] w-[1173px] bg-white border-[1px] border-secondary rounded-[20px] absolute left-[148px] top-[221px] flex flex-col items-center justify-center">
      <div className="text-dark-text underline text-[36px] font-serif text-center absolute top-[30px]">ADMIN LOGIN</div>
      <div className="flex justify-center items-center h-full">
        <Image src="/borcelle.svg" alt="newimg" width={500} height={500} />
      </div>
    </div>
  );
}
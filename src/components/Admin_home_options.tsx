import { BsFillBellFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/all";
import { IoSend } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

export default function Button() {
  return (
    <div>
      <button className="absolute w-[210px] h-[110px] left-[300px] top-[60px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] transition-all hover:scale-105 hover:bg-[#0077B6] hover:text-[#03045E]">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-4 hover:text-[#03045E]">Add New Academic Year</div>
        <MdAddCircleOutline className="absolute top-[50px] right-[85px] " size={30} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[600px] top-[60px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] transition-all hover:scale-105 hover:bg-[#0077B6] hover:text-[#03045E]">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-9 hover:text-[#03045E]">Organize Meeting</div>
        <IoIosPeople className="absolute top-[50px] right-[85px]" size={35} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[300px] top-[215px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] transition-all hover:scale-105 hover:bg-[#0077B6] hover:text-[#03045E]">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-10 hover:text-[#03045E]">Add New Subject</div>
        <MdAddCircleOutline className="absolute top-[50px] right-[85px]" size={30} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[600px] top-[215px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] transition-all hover:scale-105 hover:bg-[#0077B6] hover:text-[#03045E]">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-11 hover:text-[#03045E]">Allocate Subject</div>
        <SiBookstack className="absolute top-[50px] right-[85px]" size={30} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[300px] top-[370px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] transition-all hover:scale-105 hover:bg-[#0077B6] hover:text-[#03045E] ">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-12 hover:text-[#03045E]">Send Message</div>
        <IoSend className="absolute top-[50px] right-[85px]" size={25} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[600px] top-[370px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] transition-all hover:scale-105 hover:bg-[#0077B6] hover:text-[#03045E]">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-12 hover:text-[#03045E]">Send Circulars</div>
        <BsFillBellFill className="absolute top-[50px] right-[85px]" size={25} />
      </button>
    </div>
  );
}

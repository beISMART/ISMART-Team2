import { BsFillBellFill } from "react-icons/bs";
import { IoIosAddCircle, IoIosPeople } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";

export default function Button() {
  return (
    <div>
      <button className="absolute w-[210px] h-[110px] left-[300px] top-[60px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] ">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-4 ">  Add New Academic Year        </div>
        <IoIosAddCircle className="    absolute top-[50px] right-[85px] text-white" size={30} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[600px] top-[60px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] ">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-9 ">  Organize Meeting       </div>
        <IoIosPeople className="    absolute top-[50px] right-[85px]" size={30} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[300px] top-[215px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] ">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-10 ">  Add New Subject         </div>
        <IoIosAddCircle className="    absolute top-[50px] right-[85px]" size={30} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[600px] top-[215px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] ">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-11 ">  Allocate Subject       </div>
        <SiBookstack className="    absolute top-[50px] right-[85px]" size={30} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[300px] top-[370px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] ">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-12 ">  Send Message        </div>
        <IoSend className="    absolute top-[50px] right-[85px]" size={20} />
      </button>
      <button className="absolute w-[210px] h-[110px] left-[600px] top-[370px] bg-[#03045E] border-[7px] border-[#0077B6] rounded-[10px] ">
        <div className="text-white text-[15px] font-serif flex absolute top-5 right-12 ">  Send Circulars        </div>
        <BsFillBellFill className="    absolute top-[50px] right-[85px]" size={20} />
      </button>
    </div>
  );
}

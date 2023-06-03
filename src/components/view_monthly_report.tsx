import { BsFillEyeFill } from 'react-icons/bs';

export default function Button() {
  return (
    <button className="h-[39px] w-[222px] text-[12px] rounded-[10px] font-serif font-bold bg-primary text-black shadow-sm border-secondary border-1">
      <BsFillEyeFill className="inline-block mr-2" style={{ fontSize: '20px' }} />
      VIEW MONTHLY REPORT
    </button>
  );
}

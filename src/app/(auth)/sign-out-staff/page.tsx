import React from 'react'
import Log_out from '@/components/Log_out';
import Link from 'next/link';

const page = () => {
  return (
    <div style={{ position: 'absolute', top: 150, right: 300 }}>
        <Log_out/>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center py-4">
        <Link href={'/sign-in-staff'}>
        <button className="mx-14  px-14 py-1 hover:text-blue-800 bg-brand hover:bg-primary text-whiteborder border-[2px] border-white  hover:border-brand rounded-[10px]">
          Yes
        </button>
        </Link>
        <Link href={'/dashboard_staff'}>
        <button className="mx-14 px-14 py-1 hover:text-blue-800 bg-brand hover:bg-primary text-white border-[2px] border-white  hover:border-brand rounded-[10px]">
          No
        </button>
        </Link>
      </div>
    </div>
  )
}

export default page
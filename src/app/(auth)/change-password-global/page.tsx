import React from 'react'
import Change_password from '@/components/Change_password';
import Cancel_button from '@/components/Cancel_button';
import Reset_button from '@/components/Reset_button';


const page = () => {
  return (
    <div><Change_password/>
    <Reset_button/>
    <Cancel_button/>
    </div>
  )
}

export default page
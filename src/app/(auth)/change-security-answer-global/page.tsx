import Cancel_button from '@/components/Cancel_button'
import Change_security_answer from '@/components/Change_security_answer'
import Reset_button from '@/components/Reset_button'
import React from 'react'

const page = () => {
  return (
    <div>
        <Change_security_answer/>
        <Reset_button/>
        <Cancel_button/>
    </div>
  )
}

export default page
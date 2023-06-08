import Forgot_password from '@/components/Forgot_password'
import Forgot_security_answer_Button from '@/components/Forgot_security_answer_Button'
import Verify_button from '@/components/Verify_button'
import React from 'react'

const page = () => {
  return (
    <div><Forgot_password/>
    <div style={{ position: 'absolute', top: 400, right: 425 }}>
    <Verify_button/></div>
    <div style={{ position: 'absolute', top: 466, right: 530 }}>

    <Forgot_security_answer_Button/></div>
    
    </div>
  )
}

export default page
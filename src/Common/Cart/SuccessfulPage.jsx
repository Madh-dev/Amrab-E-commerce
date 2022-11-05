import React from 'react'
import { Link } from 'react-router-dom'

const SuccessfulPage = () => {
  return (
    <div className='successfulPage'>
    <h4>
        Successful  
    </h4>
    <p>Thank you for patronizing us.<br /> Give feedback after you receive the goods</p>
    <Link to='/' className="homie"> Home</Link>
</div>
  )
}

export default SuccessfulPage
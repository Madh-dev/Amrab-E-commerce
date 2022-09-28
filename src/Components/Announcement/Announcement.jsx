import React from 'react'

const Announcement = () => {

    const mystyle = {
        width: "30%",
        height: "340px",
      }
      const mystyle1 = {
        width: "68%",
        height: "340px",
      }

  return (
    <>
    <section className='annouc background'>
        <div className='container d_flex'>
            <div className='img' style={mystyle}>
                <img src='./Images/banner-1.png' style={{width: "100%",height: "100%"}} alt='' />
            </div>
            <div className='img' style={mystyle1}> 
                <img src='./Images/banner-2.png' style={{width: "100%",height: "100%"}} alt=''  />
            </div>
        </div>
    </section>
    </>
  )
}

export default Announcement
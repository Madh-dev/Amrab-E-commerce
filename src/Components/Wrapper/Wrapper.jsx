import React from 'react'
import './Wrapper.css'


const Wrapper = () => {
    
        const data = [
          {
            cover: <i className='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            decs: "We offer a range of international delivery services to more than 180 countries worldwide, with speed, reliability, and quality always in mind.",
          },
          {
            cover: <i className='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            decs: "We utilises a variety of safeguards and monitoring tools to protect you, including proprietary technology solutions.",
          },
          {
            cover: <i className='fa-solid fa-shield'></i>,
            title: "Shop With Confidence ",
            decs: "We can be confident that when using our service, you can expect the highest level of service and that if any problems should arise, we'll deal with them promptly and fairly.",
          },
          {
            cover: <i className='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            decs: "You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach outhere’ll always be a friendly person there to make your life easy..",
          },
        ]
    
  return (
   <>
   <section className='wrapper background'>
    <div className='container grid2'>
        {data.map((val, index) =>{
            return(
                
                <div className='product' key={index}>
                    <div className='img icon-circle'>
                        <i>{val.cover}</i>
                    </div>
                    <h3>{val.title}</h3>
                    <p>{val.decs}</p>
                </div>
                
            )
        })}
    </div>
   </section>
   </>
  )
}

export default Wrapper
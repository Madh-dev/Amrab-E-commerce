import React from 'react'
import Ndata from './NewArrivalsData'
const Cart = () => {
    return (
        <>
            <div className='content grid product'>
                {Ndata.map((value, index) => {

                    return (
                        <div className='box' key={index}>
                            <div className='img'>
                                <img src={value.cover} alt='' />
                            </div>
                            <div className='newarrival_detail'>
                                <h4>{value.name}</h4>
                                <span>{value.price}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Cart
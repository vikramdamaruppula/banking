import React from 'react'
import { bankdetails } from '../headerData/headData'
import './bottomTop.css'
const BottomTop = () => {
  return (
    <div className='bottom-main-container'>
        <h2 style={{padding:'12px'}}> Benefits Of Banking With Silber Private Bank</h2>
        <div className='grid-container'>
            {bankdetails.map((item)=>{
                return(
                    <div className='grid-item'  key={item?.id}>
                        <img src={item?.imageUrl} alt='creditcard' />
                        <div style={{marginTop:'-20px',marginLeft:'12px'}}>
                            <h3> {item.name}</h3>
                            <p> {item.description} </p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div>
            <button> Contact Us</button>
            <button style={{margin:'10px'}}> Get Started</button>

        </div>
    </div>
  )
}

export default BottomTop
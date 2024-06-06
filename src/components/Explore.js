import React from 'react'
import {descriptionData,convenienceData} from '../headerData/headData'
import RenderItems from './RenderItems'


const Explore = () => {
  

  return (
    <div className='explore-section'>
    <div className='explore-section'>
        <h2>Explore Our Offerings...</h2>
        <div className='wrapper'>
          {descriptionData?.map((item)=> <RenderItems item={item} key={`iems1-${item}`} />)}
        </div>
        <button style={{fontSize:"16px"}}>Ready To Create An Account</button>
    </div>
        <h1> Get Convinence & Security With Our <br/><span style={{textAlign:'center', marginLeft:"45px"}}> Smart Banking System </span> </h1>
        <div className='wrapper'>
          {convenienceData.map((convinienceItem)=> <RenderItems item={convinienceItem} />)}
        </div>
    </div>
  )
}

export default Explore
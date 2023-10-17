import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cards(props) {
const [textAd,setTextAd]=useState(true)
  const [mediaAd,setMediaAd]=useState(true)
const handleCheckboxChange = (e) => {
if(props.cname=== 'c_text') {
  setTextAd(false);
 props.getDataText(textAd);

}
else if (props.cname=='c_media'){
  setMediaAd(false);
 props.getDataMedia(mediaAd);
}
}
  return (
    <>
      <div className='card_container'>
      <div className="card_top">
      <input type='checkbox' className={props.cname} onChange={handleCheckboxChange}/>
      </div>
      <div className="card_middle">
        <img src={props.Adimg} alt="" />
      </div>
      <div className="card_bottom">
        <p className='text_p'>Create</p>
        <p className='Darktext_p'>{props.text}</p>
      
      </div>
    </div>
    </>
  
   
  )
}

export default Cards

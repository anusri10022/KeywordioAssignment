import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import img1 from '../Assets/asset1.png'
import img2 from '../Assets/asset2.png'
import '../Styles/CreateAd.css'
import '../Styles/Form.css'
import { useNavigate } from 'react-router-dom'

 function CreateAds() {
  var textAdClicked;
  var mediaAdClicked;
  const navigate = useNavigate()
  function getDataText(textAd){
    if(textAd==true)
    textAdClicked=true;
   
  }
  function getDataMedia(mediaAd){
    if(mediaAd==true)
    mediaAdClicked=true;
  }
function handleNext(textAd,mediaAd){
  getDataText(textAd);
  getDataMedia(mediaAd);
if(textAdClicked==true){
  navigate('/TextAd')
}
else if(mediaAdClicked==true)
navigate('/MediaAd')
 

}
  return (
    
    <div className='Ad_container'>
      <div className="Ad_title"><p>Create Ads</p></div>
      <div className="cards_container">
      <Cards Adimg = {img1} text={"Text Ad"}   cname='c_text' getDataText={getDataText}/>
   <Cards Adimg = {img2} text={"Media Ad"} cname='c_media' getDataMedia={getDataMedia}/>
      </div>
  <div className="btn_container">
  <button className='btn btn-primary' onClick={handleNext}>Next</button>
  </div>

    </div>
  )
}

export default CreateAds

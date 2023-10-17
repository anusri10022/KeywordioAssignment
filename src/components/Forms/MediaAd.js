
import React, { useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

function MediaAd() {
  const navigate = useNavigate()
  const [modalOpen,setModalOpen] = useState(false)
  var count=0;
  const customStyles = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: 0,
  boxShadow: 24,
  borderRadius: '16px',
  p: 4,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true)
       }
       
useEffect(()=>{
  if (modalOpen==true)
{
setTimeout(()=>{
  const interval=setInterval(()=>{

    count ++;
if(count==5)
navigate("/CreateAd")
  },1000)
},1000)
}
},[modalOpen])

  const handleBackClick = () => {
    navigate("/CreateAd")
  }
  
  

  return (
    <div className='form_container'>
      <div className="title_Ad"> <h6>Create Text & Media</h6></div>
  
   <form>
    <div className="section1">
      <div className="sec1_left">
        <div className="sec1_sub_left">
        <label >Heading 01</label>
      <input className="form-control" type="text" placeholder='Enter an intresting heading' />
        </div>
      <div className="sec1_sub_left">
      <label >Heading 02</label>
      <input className="form-control" type="text" placeholder='Enter an intresting heading' />
      </div>
      
      </div>
      <div className="sec1_right">
        <label>Description 01</label>      
      <textarea className="form-control" cols="24" rows="5" placeholder='Add primary Text to help user understand more about your products, services or offers'></textarea>
      </div>
    </div>
    <div className="section2">
      <div className="sec2_input">
      <label>Landscape Marketing Image (1.9:1)</label>
      <input className="form-control" type="text" placeholder='Add URL of the image you want to the ad' />
      </div>
    <div className="sec2_input">
    <label>portrait Marketing Image (4:5)</label>
      <input className="form-control" type="text" placeholder='Add URL of the image you want to the ad' />
    </div>
    <div className="sec2_input">
    <label>Square Marketing Image (1:1)</label>
      <input className="form-control" type="text" placeholder='Add URL of the image you want to the ad' />
      </div> 
    </div>
    <div className="section3">
      <div className="sec3_input">
      <label>Video URL</label>
      <input className="form-control" type="text" placeholder='Add the URL of the video you want to add' />
      </div>
    </div>
    <div className="section4">
      <div className="sec4_input">
      <label>Business name</label>
      <input className="form-control" type="text" placeholder='Add your Business Name' />
      </div>
      <div className="sec4_input">
      <label>Button Label</label>
      <input className="form-control" type="text" placeholder='Select Label that best suites your Ad' />
      </div>
    </div>
    <div className="section5">
      <div className="sec5_input">
      <label >Website URL</label>
      <input className="form-control" id="exampleInputPassword1" type="text" placeholder='Add the URL of landing page yout want to redirect to' />
      </div>
    </div>
    <div className="button">
  <button className='btn btn-light m-2' onClick={handleBackClick}>Back</button>
<button className='btn btn-primary m-2' onClick={handleSubmit}>Submit</button>
    <Modal
        open={modalOpen}      
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={customStyles}>
          <Typography  align="center" id="modal-modal-title" variant="h6" component="h2">
           <CheckCircleIcon style={{ color: '#1e90ff' }}/>
          </Typography>
          <Typography  align="center" id="modal-modal-description" sx={{ mt: 2 }}>
           Submitted
          </Typography>
        </Box>
      </Modal>
    </div>
   
   </form>
    </div>
  )
}

export default MediaAd

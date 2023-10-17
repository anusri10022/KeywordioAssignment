import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import {  useMediaQuery, useTheme} from '@mui/material';
import Ham from './Ham'
function NavigationBar() {

  const theme =  useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div className='nav_container'>
      <div className="left_nav">
        <div className="title">
        <h4>APP LOGO</h4>
        </div>
      
        {
          isMatch ? ( 
        <Ham/>
        
        ) : (
          <>
          <div className="right_nav">
     <Link to="/"><h4>DASHBOARD</h4></Link>
  <Link to='/CreateAd'> <h4>CREATE ADS</h4></Link>
    </div>
         </>
        )}
      </div>
   
    </div>
  )
}

export default NavigationBar

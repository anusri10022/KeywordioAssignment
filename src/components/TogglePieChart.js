import React, {useState} from 'react'
import TablePie from './TablePie'
import Switch from '@mui/material/Switch';
import PiechartMUI from './PiechartMUI'
function TogglePieChart() {
    const [checked, setChecked] = useState(true);
    const [activePage, setActivePage] = useState(1)
    const handleSwitch =(event) => {
      setChecked(event.target.checked);
      setActivePage(!activePage)
    }
  return (
   <>
   <div className="dash_container">
    
   <div >
      {activePage ? <div className='TogglePage1'><TablePie/></div> : <div className='TogglePage1'><PiechartMUI/></div>}
      </div>
     
      <div className="toggle_btn">
    <Switch className='toggle_btn'
      checked={checked}
      onChange={handleSwitch}
      inputProps={{ 'aria-label': 'controlled' }}
    />
   
    </div>
   </div>
     
   </>
  )
}

export default TogglePieChart

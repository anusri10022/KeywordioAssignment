import React from 'react'
import { PieChart } from '@mui/x-charts'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { TableContainer, Paper } from '@mui/material'
function PiechartMUI() {
  return (
    <>
     <TableContainer  component={Paper}>
     <div className='top_sec' >
        <div className='left_top_sec'><h5>Ad insights</h5></div>
      <div className='help_btn'><div className="custom_select">
    <select>
   <option value="">Select Metrics</option>
  <option value="Option1">Percentage</option>
  <option value="Option2"> Number</option>
</select>
    </div></div></div>
    

</TableContainer>
<div className="PieChart">

</div>
  <div className="pieChart">
  <PieChart 
    colors = { ["#ff8c00","#6495ed","black"]}
      series={[
        {
          data: [
            { id: 0, value: 40, label: '40% Male', color:"#ff8c00" },
            { id: 1, value: 35, label: '35% Female' ,color:"#6495ed"},
            { id: 2, value: 25, label: '25% Unknown',color:"black" },
          ],
          innerRadius: 40,
          outerRadius: 100,
          paddingAngle: 2,
        },
      ]}
    
      width={500}
      height={300}
    />
  </div>

      
  
    </>

  )
}

export default PiechartMUI

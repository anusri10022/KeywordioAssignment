
import React from 'react'
import TableDash from '../components/TableDash'
import '../Styles/Dashboard.css'
import TogglePieChart from '../components/TogglePieChart'
function Dashboard() {
  return (
    <>
  
    <div className="Dashboard_container"> 
    <div className="left_dash">  <TableDash/></div>   
   <div className="right_dash">  <TogglePieChart/>  </div>
    
    </div> 
     </>  
  )
}

export default Dashboard

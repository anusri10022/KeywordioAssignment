import React, { useState } from 'react'
import { TableContainer, Table, TableHead, TableBody,TableRow, TableCell, Paper, TableSortLabel } from '@mui/material'
import {tableData} from '../Helpers/Tabledata'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function TableDash() {
   const [orderDirection, setOrderDirection] = useState('asc')
   const [valuetoOrderBy, setValuetoOrderBy] = useState('Campaigns')
const handleRequestSort = (event,property) => {
  const isAscending = (valuetoOrderBy === property && orderDirection === 'asc')
  setValuetoOrderBy(property)
  setOrderDirection(isAscending ? 'desc': 'asc')
  setValuetoOrderBy(property)
}
const createSortHandler = (property) => (event) => {
  handleRequestSort(event,property)
  
}


  return (
    < >
   
    <TableContainer  component={Paper}>
      <div className='top_sec' >
        <div className='left_top_sec'><h5>Ad insights</h5></div>
      <div className='help_btn'><HelpOutlineIcon /></div></div>
<hr></hr>
<Table >

    <TableHead>
   
        <TableRow>
            <TableCell  align='left' padding-left='1px' padding-right='1px' style={{width:'fit-content'}} xs={12}>  <TableSortLabel 
            active={valuetoOrderBy === 'Campaigns'}
            direction= {valuetoOrderBy === 'Campaigns' ? orderDirection : 'asc'}
            onClick={createSortHandler("Campaigns")}
            >
              Campaigns </TableSortLabel></TableCell>
            <TableCell align='left' padding-left='1px' padding-right='1px' ><TableSortLabel active={valuetoOrderBy === 'Clicks'}
            direction={valuetoOrderBy === 'Clicks' ? orderDirection : 'asc'}
            onClick={createSortHandler("Clicks")}
            >Clicks  </TableSortLabel></TableCell>
            <TableCell align='left' padding-left='px' padding-right='1px' > <TableSortLabel active={valuetoOrderBy === 'Cost'}
            direction={valuetoOrderBy === 'Cost' ? orderDirection : 'asc'}
            onClick={createSortHandler("Cost")}
            >Cost </TableSortLabel></TableCell>
            <TableCell align='left' padding-left='1px' padding-right='px'><TableSortLabel active={valuetoOrderBy === 'Conversions'}
            direction={valuetoOrderBy === 'Conversions' ? orderDirection : 'asc'}
            onClick={createSortHandler("Conversions")}
            >Conversions </TableSortLabel></TableCell>
            <TableCell align='left' padding-left='1px' padding-right='1px' ><TableSortLabel active={valuetoOrderBy === 'Revenue'}
            direction={valuetoOrderBy === 'Revenue' ? orderDirection : 'asc'}
            onClick={createSortHandler("Revenue")}
            >Revenue </TableSortLabel></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
      {  tableData.map(row => (
<TableRow key={row.id} >
    <TableCell>{row.campaign}</TableCell>
    <TableCell>{row.clicks}</TableCell>
    <TableCell>{row.cost}</TableCell>
    <TableCell>{row.conversions}</TableCell>
    <TableCell>{row.Revenue}</TableCell>
</TableRow>

        )

        )
      }
     
    </TableBody>
</Table>
      </TableContainer>
  
      
    </>
  )
}

export default TableDash

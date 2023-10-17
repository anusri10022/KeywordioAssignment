import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';


function Ham() {
    const [opendrawer, setOpenDrawer] = useState(false)
    const pages = ["DASHBOARD" , "CREATE ADS"]
  return (
   <>
   <Drawer  open={opendrawer} onClose={()=>setOpenDrawer(false)}>
    <List>
    {
    pages.map((page,index) => (
        <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
            <ListItemText>
            {page}
            </ListItemText>
        </ListItemButton>
    ))
}
        
    </List>
   </Drawer>
   <IconButton sx={{color:"#000", marginLeft:'auto'}} onClick={() => setOpenDrawer(!opendrawer)}>
    <MenuIcon />
   
   </IconButton>
   </>
  )
}

export default Ham

import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
                <Typography variant='h6'>my-app3</Typography>
                &nbsp;
               <Link to='/s'>
               <button variant='contained'>state</button>
               </Link>
               &nbsp;
               <Link to='/c'>
               <button variant='contained'>Counter</button>
               </Link>
               <Link to='/d'>
               <button variant='contained'>DisplayName</button>
               </Link>
             
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Navbar
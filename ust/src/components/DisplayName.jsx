import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const DisplayName = () => {
    var[val,setval]=useState()
    const react=()=>{
        console.log("react clicked")
        setval("react")
    }
    const angular=()=>{
        console.log("angular clicked")
        setval("angular")
    }
    const next=()=>{
        console.log("next clicked")
        setval("next")
    }
    
  return (
    <div>
       
        <Typography variant='h4'>welcome{val}</Typography>
        <Button variant='contained' onClick={react}>react</Button>
        <Button variant='contained'color='success'onClick={angular}>angular</Button>
        <Button variant='contained'color='error'onClick={next}>next</Button>
    </div>
  )
   
}

export default DisplayName
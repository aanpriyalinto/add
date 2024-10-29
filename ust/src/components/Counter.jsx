import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter=()=> {
    var[count,setCount]=useState(0);
    const add=()=>{
        console.log("add btn clicked");
        setCount(count+1)
    }
    const sub=()=>{
        console.log(" btn clicked");
        setCount(count-1)
    }
  return (
    <div>
        <Typography variant='h4'>count:</Typography>
        <Button variant='contained'color='success' onClick={add}>+</Button>
        <Button variant='contained'color='error'onClick={sub}>-</Button>
    </div>
  )
}

export default Counter
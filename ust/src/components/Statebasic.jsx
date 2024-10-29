import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
   
    var[name,setname]=useState("AANPRIYA")
    var[val,setval]=useState()
    
    const handleClick=(e)=>{
        console.log(e.target.value)
        setname(e.target.value)

    }
    const submit=()=>{
        setval(name)
    }
  return (
    <div>
       <Typography variant='h6'>
        welcome {val}
       </Typography>
       <TextField variant='outlined'onChange={handleClick} label='enter name'/><br/>
       <br/>

       <Button onClick={submit} variant='contained'>submit</Button>
       
       
    </div>
  )
}

export default Statebasic
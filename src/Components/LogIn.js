import DashBoard from './DashBoard';
import React, { Component, useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';





const LogIn = () => {
    const [isLoggedIn, toggleLogin] = useState(false)
    if(!isLoggedIn) {
        return(
            <Box component="span" m={30} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <TextField placeholder='*UserName*' />
            <TextField placeholder='*Password*' hidden/>
            <br></br>
            <Button variant='contained' onClick={() => toggleLogin(isLoggedIn ? false : true)} color='secondary'>
              Login
            </Button>
            </Box>
              )
      } else {
          return (<DashBoard/>)
      }
   
}
            

export default LogIn;

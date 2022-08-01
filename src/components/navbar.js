import React from "react";
import {AppBar,Box, Toolbar, Typography,Button} from '@mui/material' 
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{flexgrow: 1}}>
             Subhash
            </Typography>
            <Button component={NavLink} to='/' style={({isActive})=>{return{backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:"none"}}>Home</Button>
            <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: "white",textTransform:"none"}}>Contact</Button>
            <Button component={NavLink} to='/login'style={({isActive})=>{return{backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:"white",textTransform:"none"}}>Login/Registration</Button>
         </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default navbar;

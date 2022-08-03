import React from 'react'
import { Grid, Typography, Button, CssBaseline } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import ChangePassword from './Auth.js/ChangePassword'

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        console.log("LogOut clicked");
        setTimeout(() => {
            navigate('/login');
        }, 5000)
    }
    return (
        <>
            <CssBaseline />
            <Grid >
                <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 4, color: 'whitesmoke', mt: 0.1 }}>
                    <Typography variant='h5'>Email:Subhash@gmail.com</Typography>
                    <Typography variant='h6'>Name:Subhash</Typography>
                    <Button variant='contained' color='warning' size='large' onClick={handleLogOut} sx={{ mt: 8 }}>Log Out</Button>
                </Grid>
                <Grid item sm={8} >
              <ChangePassword/>
                 
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard
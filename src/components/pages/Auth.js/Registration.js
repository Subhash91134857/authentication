import { Box, TextField, Alert, Checkbox, FormControlLabel, Button, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';


const Registration = () => {
    const [error, setError] = useState({
        status: false,
        msg: ' ',
        type: ''
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            ConfirmPassword: data.get("confirm-password"),
            tc: data.get("tc"),

        }
        // console.log(actualData);
        if (actualData.name && actualData.email && actualData.password &&actualData.ConfirmPassword && actualData.tc !== null) {
            console.log(actualData);
            if (actualData.password===actualData.ConfirmPassword) {
                document.getElementById('registration-form').reset()
                setError({
                    status: true,
                    msg: "Registration Successful",
                    type: 'success'
                })
               navigate('/Dashboard')
            } else {
                setError({
                    status: true,
                    msg: "Password and confirmpassword doesn't match!",
                    type: 'error'
                })
            }
           
        } else {
            setError({
                status: true,
                msg: "All fields are required",
                type: 'error'
            })
        }
    };
    return (
        <>
            <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                id="registration-form"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="name"
                    name="name"
                    label="Enter the Name"
                    type="name"

                />
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"

                />

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="password"
                    name="password"
                    label="password"
                    type="password"

                />
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="confirm-password"
                    name="confirm-password"
                    label="confirm Password"
                    type="confirm-password"

                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox value='agree' color="primary" name="tc" id='tc' />} label="I agree to term and condition." />

                </FormGroup>
                <Box textAlign="center">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, px: 5 }}

                    >
                        Register
                    </Button>
                </Box>
                
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </>
    )
}

export default Registration
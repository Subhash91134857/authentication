import { TextField, Box, Alert } from "@mui/material"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'semantic-ui-react'

const ChangePassword = () => {
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
            password: data.get("password"),
            confirmpassword: data.get("confirm_password")
        }
        // console.log(actualData);
        if (actualData.password && actualData.confirmpassword) {

            console.log(actualData);
            if (actualData.password === actualData.confirmpassword) {
                document.getElementById('password-change-form').reset()
                setError({
                    status: true,
                    msg: < h1 > "Password has reset, Redirecting to login page............."</h1>,
                    type: 'success'
                })
                setTimeout(() => {
                    navigate('/login')
                }, 3000)

            }
            else {
                setError({
                    status: true,
                    msg: "Password and Confirm password doesn't match!",
                    type: 'error'
                })
            }
        } else {
            setError({
                status: true,
                msg: "All fields are required!",
                type: 'error'
            })
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: '600', mx: 4 }}>
                <h1>Change Password</h1>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id='password-change-form'>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        id="password"
                        name="password"
                        label="New Password"
                        type="password"

                    />
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        id="confirm_password"
                        name="confirm_password"
                        label=" Confirm New Password"
                        type="password"

                    />
                    <Box textAlign='center'>
                        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Update</Button>
                    </Box>
                    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                </Box>

            </Box>
        </>
    )
}

export default ChangePassword
import { React, useState } from 'react'
import { Grid, TextField, Button, Box, Alert } from "@mui/material"
import { useNavigate } from 'react-router-dom'
const ResetPassword = () => {
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
            confirmpassword:data.get("confirm_password")
        }
        // console.log(actualData);
        if (actualData.password && actualData.confirmpassword) {

            console.log(actualData);
            if (actualData.password === actualData.confirmpassword) {
                document.getElementById('reset-password-form').reset()
                setError({
                    status: true,
                    msg: < h1 > "Password has reset, Redirecting to login page............."</h1>,
                    type: 'success'
                })
                setTimeout(() => {
                    navigate('/login')
                },3000)
                
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
            <Grid container justifyContent='center'>
                <Grid item lg={7} sm={6} xs={12}>
                    <h1>Reset Password</h1>
                    <Box
                        component="form"
                        nonValidate
                        sx={{ mt: 1 }}
                        id="reset-password-form"
                        onSubmit={handleSubmit}
                    >
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
                            label="New Confirm Password"
                            type="password"

                        />

                        <Box textAlign="center">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, px: 5 }}

                            >
                                Submit
                            </Button>
                        </Box>

                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                    </Box>
                </Grid>
            </Grid>


        </>
    )
}

export default ResetPassword
import { React, useState } from 'react'
import { Grid,Box, TextField, Alert, Button } from '@mui/material'


const SendPasswordResetEmail= () => {
    const [error, setError] = useState({
        status: false,
        msg: ' ',
        type: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get("email"),
        }
        // console.log(actualData);
        if (actualData.email) {
            console.log(actualData);
            document.getElementById('password-reset-form').reset()
            setError({
                status: true,
                msg: "Password reset email sent. Check your Email !!",
                type: 'success'
            })
          
        } else {
            setError({
                status: true,
                msg: "Please provide a valid email",
                type: 'error'
            })
        }
    };


    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item sm={6} xs={12}>
                    <Box
                        component="form"
                        nonValidate
                        sx={{ mt: 1 }}
                        id="password-reset-form"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"

                        />

                        <Box textAlign="center">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, px: 5 }}

                            >
                                Login
                            </Button>
                        </Box>

                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                    </Box>
                </Grid>
            </Grid>
            

        </>
    )
}

export default SendPasswordResetEmail
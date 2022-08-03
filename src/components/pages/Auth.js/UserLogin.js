import { TextField, Button, Box, Alert } from "@mui/material";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserLogin = () => {
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
            email: data.get("email"),
            password: data.get("password"),
        }
        // console.log(actualData);
        if (actualData.email && actualData.password) {
            console.log(actualData);
            document.getElementById('login-form').reset()
            setError({
                status: true,
                msg: "Login success",
                type: 'success'
            })
            navigate('/Dashboard')
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
                nonValidate
                sx={{ mt: 1 }}
                id="login-form"
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
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="password"
                    name="password"
                    label="password"
                    type="password"

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
                <NavLink to='/sendpasswordresetemail' vari>
                    Forgot Password
                </NavLink>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </>
    );
};

export default UserLogin;

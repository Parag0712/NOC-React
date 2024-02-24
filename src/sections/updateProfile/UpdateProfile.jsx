import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UpdateProfile() {
    const theme = useTheme();
    // const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdate = (data) => {
        console.log(data);
    };



    const imageChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
    }

    return (
        <Box
            sx={{
                ...bgGradient({
                    color: alpha(theme.palette.background.default, 0.9),
                }),
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                height: 1,
            }}
        >


            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Card
                    sx={{
                        p: 5,
                        width: 1,
                        maxWidth: 500,
                        minWidth: 450
                    }}
                >
                    <Typography variant="h4">Update Profile</Typography>

                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <Stack spacing={3} >
                            <Stack alignItems="center" >

                                <label htmlFor="fileInput">
                                    <Avatar
                                        sx={{ margin: "auto", width: 70, height: 70, cursor: "pointer" }}
                                    />
                                </label>
                                <input type='file' id='fileInput' hidden
                                    onChange={imageChange}
                                    {
                                    ...register("profileImage")
                                    }
                                />
                            </Stack>

                            <TextField
                                type='text'
                                name="firstName"
                                fullWidth
                                label="First Name"
                                error={errors.firstName}
                                helperText={
                                    <motion.div
                                        style={{
                                            color: 'red',
                                            opacity: errors.firstName ? 1 : 0,
                                            transition: "opacity 0.3s ease-in-out",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {errors.firstName && errors.firstName.message}
                                    </motion.div>
                                }
                                {...register("firstName", {
                                    required: "First name is required",
                                    pattern: {
                                        value: /^[a-zA-Z\s]*$/,
                                        message: "Enter a valid first name"
                                    }
                                })}
                            />

                            {/* lastName */}
                            <TextField
                                type='text'
                                name="lastName"
                                fullWidth
                                label="Last Name"
                                error={errors.lastName}
                                helperText={
                                    <motion.div
                                        style={{
                                            color: 'red',
                                            opacity: errors.lastName ? 1 : 0,
                                            transition: "opacity 0.3s ease-in-out",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {errors.lastName && errors.lastName.message}
                                    </motion.div>
                                }
                                {...register("lastName", {
                                    required: "Last name is required",
                                    pattern: {
                                        value: /^[a-zA-Z\s]*$/,
                                        message: "Enter a valid last name"
                                    }
                                })}
                            />

                            <TextField
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                error={!!errors.password}
                                helperText={
                                    <motion.div
                                        style={{
                                            color: 'red',
                                            opacity: errors.password ? 1 : 0,
                                            transition: "opacity 0.3s ease-in-out",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {errors.password && errors.password.message}
                                    </motion.div>
                                }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                {...register("password", {
                                    required: '*Password is required',
                                    minLength: {
                                        value: 6,
                                        message: '*Password must be at least 6 characters long'
                                    }
                                })}
                            />
                        </Stack>

                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="inherit"
                            sx={{ marginTop: "20px" }}
                        >
                            Update Profile
                        </LoadingButton>
                    </form>
                </Card>
            </Stack>
        </Box>
    );
}

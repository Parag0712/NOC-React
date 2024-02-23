import { useRef,useState } from 'react';

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

// import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

// import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UpdateProfile() {
    const theme = useTheme();
    // const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const fileInputRef = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
    };

    const imageChange = (e)=>{
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

                    <form onSubmit={handleClick}>
                        <Stack spacing={3} >
                            <Stack alignItems="center">
                                    <Avatar  sx={{ margin: "auto", width: 70, height: 70 }} onClick={()=>{
                                           fileInputRef.current.click();
                                    }}/>
                                <input type='file' ref={fileInputRef} id='fileInput' hidden 
                            onChange={imageChange}
                            />
                            </Stack>

                            
                            <TextField name="text" label="First Name" />
                            <TextField name="text" label="Second Name" />
                           
                            <TextField
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Stack>

                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="inherit"
                            sx={{marginTop:"20px"}}
                        >
                            Update Profile
                        </LoadingButton>
                    </form>
                </Card>
            </Stack>
        </Box>
    );
}

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack, Button, MenuItem, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function appForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCertificate = () => {
    }

    return (
        <Container maxWidth="xl">
            {/* <Typography variant="h4">Application Form</Typography> */}

            <form onSubmit={handleSubmit(handleCertificate)}>

                <Grid container spacing={3}>
                    <Grid item xs={10} md={10} lg={11} sx={{ margin: "auto" }}>
                        <Stack spacing={{ xs: 0, lg: 3 }} sx={{ gap: "20px" }} direction={{ xs: 'column', lg: 'colum' }}>

                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "colum", lg: "row" }}>

                                {/* Email */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="email"
                                    label="Email address"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.email ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.email && errors.email.message}
                                        </motion.div>
                                    }
                                    {...register("email", {
                                        required: '*Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@(charusat\.edu\.in|charusat\.ac\.in)$/,
                                            message: '*InValid Email. ex. [@charusat.edu.in, @charusat.ac.in]'
                                        }
                                    })}
                                />



                                {/* Phone No */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="student_phoneNo"
                                    label="Student Phone Number"
                                    error={!!errors.student_phoneNo}
                                    fullWidth
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.student_phoneNo ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.student_phoneNo && errors.student_phoneNo.message}
                                        </motion.div>
                                    }
                                    {...register("student_phoneNo", {
                                        required: '*Stundet Number is required',
                                        pattern: {
                                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                            message: '*Student Number must be at least 10 characters long'
                                        }
                                    })}
                                />

                            </Stack>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>

                                {/* Student RollNo */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="student_id"
                                    label="Student Roll No"
                                    error={!!errors.student_id}
                                    fullWidth
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.student_id ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.student_id && errors.student_id.message}
                                        </motion.div>
                                    }
                                    {...register("student_id", {
                                        required: '*Student RollNo is required. ',
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+$/,
                                            message: '*Student RollNo ex. [D12DCS12,22DCS21]'
                                        }
                                    })}
                                />

                                {/* Student Name */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="student_name"
                                    label="Student Name"
                                    error={!!errors.student_name}
                                    fullWidth
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.student_name ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.student_name && errors.student_name.message}
                                        </motion.div>
                                    }
                                    {...register("student_name", {
                                        required: '*Stundet Name is required.',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/,                                            message: '*Enter a valid Student Name'
                                        }
                                    })}
                                />

                                {/* Semester */}
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Semester"
                                    defaultValue="2"
                                    helperText="Semester"
                                    name='student_sem'
                                    {...register("student_sem")}
                                >
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="6">6</MenuItem>
                                    <MenuItem value="8">8</MenuItem>
                                </TextField>
                            </Stack>

                            {/* College */}
                            <Typography variant="h6">College Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "colum", lg: "row" }}>

                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="College"
                                    defaultValue="2"
                                    helperText="College"
                                    name='college_name'
                                    {...register("college_name")}
                                >
                                    <MenuItem value="2">2</MenuItem>
                                </TextField>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Branch"
                                    defaultValue="2"
                                    name='college_branch'
                                    helperText="Branch"
                                    {...register("college_branch")}
                                >
                                    <MenuItem value="2">2</MenuItem>
                                </TextField>


                            </Stack>

                            {/* Company */}

                            <Typography variant="h6">Company Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>
                                <TextField type='text' name="company_name" fullWidth label="Company Name" />
                                <TextField type='text' name="company_location" fullWidth label="Company Location" />
                            </Stack>


                            {/* Hr Details */}

                            <Typography variant="h6">Hr Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>
                                <TextField type='text' name="hr_name" fullWidth label="Hr Name" />
                                <TextField type='email' name="hr_email" fullWidth label="Hr email" />
                                <TextField type='tel' name="hr_phoneNo" fullWidth label="Hr Phone" />
                            </Stack>


                            <Typography variant="h6">Inetrship Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ width: "100%" }} label="Start Date" 
                                    {...register("internship_starting_date")}/>
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ width: "100%" }} label="End Date" 
                                    {...register("internship_ending_date")}/>
                                    
                                    
                                </LocalizationProvider>
                            </Stack>
                        </Stack> <Button type="submit" fullWidth sx={{ marginTop: "40px", padding: "10px" }} variant="contained">Send Application</Button>
                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}

import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack, Button, MenuItem, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useState } from 'react';
import format from 'date-fns/format';

export default function appForm() {

    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();

    // Handle Certificate
    const handleCertificate = (data) => {
        console.log(data);
        console.log(data.student_email);
        const dayjsDate = data.internship_starting_date;
        const jsDate = dayjsDate?.toDate();
        const dateString = jsDate?.toLocaleDateString(undefined, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        console.log(dateString);
    }

    const colleges = [
        { name: "CSPIT", branch: ["CE", "IT"] },
        { name: "DESTAR", branch: ["CSE", "CE", "IT"] }
    ];

    const [branchOptions, setBranchOptions] = useState([]);
    // Watch for changes in the "college_name" field
    useEffect(() => {
        console.log(watch('college_name'));
        const selectedCollege = colleges.find(college => college.name === watch('college_name'));
        console.log(selectedCollege);
        const branches = selectedCollege ? setBranchOptions(selectedCollege?.branch) : "";
    }, [watch('college_name')]);

    return (
        <Container maxWidth="xl">

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Application Form</Typography>

            </Stack>

            {/* <Typography variant="h4">Application Form</Typography> */}

            <form onSubmit={handleSubmit(handleCertificate)}>

                <Grid container spacing={3}>
                    <Grid item xs={10} md={10} lg={11} sx={{ margin: "auto" }}>
                        <Stack spacing={{ xs: 0, lg: 3 }} sx={{ gap: "20px" }} direction={{ xs: 'column', lg: 'colum' }}>

                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "colum", lg: "row" }}>

                                {/* Email */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="student_email"
                                    label="Student Email"
                                    fullWidth
                                    error={!!errors.student_email}
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.student_email ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.student_email && errors.student_email.message}
                                        </motion.div>
                                    }
                                    {...register("student_email", {
                                        required: '*Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@(charusat\.edu\.in|charusat\.ac\.in)$/,
                                            message: '(e.g. id@charusat.edu.in, id@charusat.ac.in)'
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
                                        required: '*Student Number is required',
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
                                        required: '*Student Name is required.',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/, message: '*Enter a valid student name'
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
                            <Typography variant="h6" >College Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "colum", lg: "row" }}>

                                {/* College Name */}
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="College"
                                    name='college_name'
                                    {...register("college_name")}
                                >
                                    {
                                        colleges.map((value) => (
                                            <MenuItem key={value.name} value={value.name}>{value.name}</MenuItem>
                                        ))
                                    }
                                </TextField>

                                {/* College Branch  */}
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Branch"
                                    name='college_branch'
                                    {...register("college_branch")}
                                >
                                    {branchOptions.map((value) => (
                                        <MenuItem key={value} value={value}>
                                            {value}
                                        </MenuItem>
                                    ))}
                                </TextField>


                            </Stack>

                            {/* Company */}

                            <Typography variant="h6">Company Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>

                                {/* Company Name */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="company_name"
                                    label="Company Name"
                                    error={!!errors.company_name}
                                    fullWidth
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.company_name ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.company_name && errors.company_name.message}
                                        </motion.div>
                                    }
                                    {...register("company_name", {
                                        required: '*Company Name is required.',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/, message: '*Enter a valid company name'
                                        }
                                    })}
                                />

                                {/* Company Location */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="company_location"
                                    label="Company Location"
                                    error={!!errors.company_location}
                                    fullWidth
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.company_location ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.company_location && errors.company_location.message}
                                        </motion.div>
                                    }
                                    {...register("company_location", {
                                        required: '*Company Location is required.',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/, message: '*Enter a valid company location'
                                        }
                                    })}
                                />
                            </Stack>


                            {/* Hr Details */}

                            <Typography variant="h6">Hr Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>


                                {/* Student Name */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="hr_name"
                                    label="Hr Name"
                                    error={!!errors.hr_name}
                                    fullWidth
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.hr_name ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.hr_name && errors.hr_name.message}
                                        </motion.div>
                                    }
                                    {...register("hr_name", {
                                        required: '*Hr name is required.',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/, message: '*Enter a valid hr name'
                                        }
                                    })}
                                />


                                {/* Hr Email */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="hr_email"
                                    label="Hr email"
                                    fullWidth
                                    error={!!errors.hr_email}
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.hr_email ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.hr_email && errors.hr_email.message}
                                        </motion.div>
                                    }
                                    {...register("hr_email", {
                                        required: '*Hr email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: '*Enter valid hr email.'
                                        }
                                    })}
                                />


                                {/* HR Phone No */}
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    name="hr_phoneNo"
                                    label="Hr Phone"
                                    error={!!errors.hr_phoneNo}
                                    fullWidth
                                    helperText={
                                        <motion.div
                                            style={{
                                                color: 'red',
                                                opacity: errors.hr_phoneNo ? 1 : 0,
                                                transition: "opacity 0.3s ease-in-out",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {errors.hr_phoneNo && errors.hr_phoneNo.message}
                                        </motion.div>
                                    }
                                    {...register("hr_phoneNo", {
                                        required: '*Hr Phone is required',
                                        pattern: {
                                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                            message: '*Hr Phone must be at least 10 characters long'
                                        }
                                    })}
                                />
                            </Stack>


                            <Typography variant="h6">Internship Details</Typography>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>
                                <Stack sx={{ width: "100%" }}>
                                    {/* Internship Starting Date */}
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Controller
                                            name="internship_starting_date"
                                            control={control}

                                            rules={{ required: 'Start Date is required' }}
                                            render={({ field }) => (
                                                <DatePicker
                                                    {...field}
                                                    label="Start Date"
                                                    renderInput={(params) => <TextField {...params} required />} // Add required attribute
                                                    value={field.value ? format(new Date(field.value), 'yyyy-MM-dd') : null}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                    {errors.internship_starting_date && (
                                        <span style={{ color: 'red' }}>{errors.internship_starting_date.message}</span>
                                    )}
                                </Stack>
                                <Stack sx={{ width: "100%" }}>
                                    {/* Internship Ending Date */}

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Controller
                                            name="internship_ending_date"
                                            control={control}
                                            rules={{ required: 'End Date is required' }}
                                            render={({ field }) => (
                                                <DatePicker
                                                    {...field}
                                                    label="End Date"
                                                    renderInput={(params) => <TextField {...params} required />} // Add required attribute
                                                    value={field.value ? format(new Date(field.value), 'yyyy-MM-dd') : null}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                    {errors.internship_ending_date && (
                                        <span style={{ color: 'red' }}>{errors.internship_ending_date.message}</span>
                                    )}
                                </Stack>

                            </Stack>
                        </Stack> <Button type="submit" fullWidth sx={{ marginTop: "40px", padding: "10px" }} variant="contained">Send Application</Button>
                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}

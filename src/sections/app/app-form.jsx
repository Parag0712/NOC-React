import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack, Button, MenuItem, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function appForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container maxWidth="xl">
            {/* <Typography variant="h4">Application Form</Typography> */}

            <form onSubmit={handleSubmit}>

                <Grid container spacing={3}>
                    <Grid item xs={10} md={10} lg={11} sx={{ margin: "auto" }}>
                        <Stack spacing={{ xs: 0, lg: 3 }} sx={{ gap: "20px" }} direction={{ xs: 'column', lg: 'colum' }}>

                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "colum", lg: "row" }}>


                                <TextField type='email' name="student_email" fullWidth label="Student Email address" />
                                <TextField type='tel' name="student_phoneNo" fullWidth label="Student Phone Number"
                                />
                            </Stack>
                            <Stack sx={{ gap: "10px" }} direction={{ sm: "row", xs: "column", lg: "row" }}>
                                <TextField type='text' name="student_id" fullWidth label="Student Roll No" />
                                <TextField type='text' name="student_name" fullWidth label="Student Name" />
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Select"
                                    defaultValue="2"
                                    helperText="Semester"
                                    name='student_sem'
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
                                    <DatePicker sx={{ width: "100%" }} label="Start Date" />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ width: "100%" }} label="End Date" />
                                </LocalizationProvider>
                            </Stack>
                        </Stack> <Button fullWidth sx={{ marginTop: "40px", padding: "10px" }} variant="contained">Send Application</Button>
                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}

import { Avatar, Card, Container, IconButton, InputAdornment, MenuItem, OutlinedInput, Popover, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, TextField, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import Iconify from "src/components/iconify";
import Label from "src/components/label";
import Scrollbar from "src/components/scrollbar";
import { ForgetForm, NewPassForm } from "src/sections/Forget";


export default function MyCertificatePage() {
  const [certificates, setCertificates] = useState([]);
  const [sortOrder, setSortOrder] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');

  const { certificateData } = useSelector(state => state.certificate);
  const { currentUser } = useSelector(state => state.user);
  

  const tableHeadings = {
    studentName: 'Name',
    studentId: 'Id',
    studentSem: 'Sem',
    studentPhoneNo: 'Phone No',
    collegeName: 'College Name',
    collegeBranch: 'College Branch',
    certificateStatus: 'Certificate Status'
  };



  //Page Load data
  useEffect(() => {
    if (certificateData) {
      console.log(certificateData);
      setCertificates(certificateData)
      setSortOrder({ studentName: 'asc' });


    }
  }, [certificateData])


  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Function to handle select dropdown change
  const handleSelectChange = (event) => {
    setSelectedCollege(event.target.value);
  };


  // OnClick Sort Set asc or not
  const handleSort = (column) => {
    setSortOrder(prevState => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        if (key !== column) {
          acc[key] = null; // Reset sorting order for other columns
        }
        return acc;
      }, {}),
      [column]: prevState[column] === 'asc' ? 'desc' : 'asc' // Toggle sorting order
    }));
  };

  const filteredCertificates = certificates.filter((certificate) => {
    const isMatchedCollege = selectedCollege === '' || certificate.college.college_name === selectedCollege;
    const isMatchedSearch = certificate.student.student_name.toLowerCase().includes(searchQuery);
    return isMatchedCollege && isMatchedSearch;
  });

  const sortedCertificates = filteredCertificates.slice().sort((a, b) => {
    const column = Object.keys(sortOrder).find(key => sortOrder[key]); // Find the active column
    const order = sortOrder[column] || 'asc'; // Get the sorting order of the active column
  
    // Perform sorting based on the active column and its sorting order
    const valueA = a[column];
    const valueB = b[column];
  
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    }
  });

  console.log(sortedCertificates);
  

  toast.success(sortOrder)

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Certificate History</Typography>

        </Stack>

        <Card>
          {/* ToolBar */}
          <Toolbar
            sx={{
              height: 96,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <OutlinedInput
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search user..."
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
            />

            {/* SORT */}
            <TextField
              id="select-currency"
              select
              sx={{ width: "180px", marginLeft: "10px" }}
              label="College"
              defaultValue="2"
              name='college_branch'
              value={selectedCollege} // Set value to match selected branch
              onChange={handleSelectChange} // Handle select dropdown change
            >
              <MenuItem value="CSPIT">CSPIT</MenuItem>
              <MenuItem value="">All Select</MenuItem>
            </TextField>
          </Toolbar >

          <Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>

                {/* Table Head */}
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox" />
                    {Object.entries(tableHeadings).map(([key,heading], index) => (
                      <TableCell key={key}>
                        <TableSortLabel
                        active={sortOrder[key] }
                        direction={sortOrder[key] || 'asc'}
                        onClick={() => handleSort(key)}
                        >
                          
                          {heading}
                        </TableSortLabel>
                      </TableCell>
                    ))
                    }
                  </TableRow>
                </TableHead>

                {/* Table Body */}


                <TableBody>

                  {sortedCertificates.map((item, index) => (
                    <TableRow key={index} hover tabIndex={-1} role="checkbox" >
                      <TableCell padding="checkbox" />

                      <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          {currentUser?.profileImage?.imgUrl ? (
                            <Avatar alt="s" src={currentUser.profileImage?.imgUrl} />
                          ) : (
                            <Avatar alt="s" />
                          )}
                          <Typography variant="subtitle2" noWrap>
                            {item.student?.student_name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{item.student?.student_id}</TableCell>
                      <TableCell>{item.student?.student_sem}</TableCell>
                      <TableCell>{item.student?.student_phoneNo}</TableCell>
                      <TableCell>{item.college?.college_name}</TableCell>
                      <TableCell>{item.college?.college_branch}</TableCell>
                      <TableCell><Label color={(item?.certificate_status === 'true' ? 'success' : (item?.certificate_status === 'false' ? 'error' : 'warning'))}>
                        {item?.certificate_status == 'false' && 'rejected'}
                        {item?.certificate_status == 'true' && 'success'}
                        {item?.certificate_status == 'pending' && 'pending'}
                      </Label>
                      </TableCell>
                      {/* <TableCell align="right">
                        <IconButton >
                          <Iconify icon="eva:more-vertical-fill" />
                        </IconButton>
                      </TableCell> */}
                    </TableRow>
                  ))}



                  <Popover
                  >
                    <MenuItem >
                      <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
                      Edit
                    </MenuItem>

                    <MenuItem sx={{ color: 'error.main' }}>
                      <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
                      Delete
                    </MenuItem>
                  </Popover>
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>


          <TablePagination
            page={10}
            component="div"
            count={10}
            rowsPerPage={10}
            // onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
          // onRowsPerPageChange={handleChangeRowsPerPage}
          />

        </Card>
      </Container>
    </>
  );
}

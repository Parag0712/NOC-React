import { Avatar, Card, Container, IconButton, InputAdornment, MenuItem, OutlinedInput, Popover, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, TextField, Toolbar, Typography } from "@mui/material";
import Iconify from "src/components/iconify";
import Label from "src/components/label";
import Scrollbar from "src/components/scrollbar";
import { ForgetForm, NewPassForm } from "src/sections/Forget";

export default function ProductsPage() {
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Users</Typography>

        </Stack>

        <Card>
          {/* ToolBar */}
          <Toolbar
            sx={{
              height: 96,
              display: 'flex',
              justifyContent: 'space-between',
              // p: (theme) => theme.spacing(0, 1, 0, 3),
              // ...(numSelected > 0 && {
              //   color: 'primary.main',
              //   bgcolor: 'primary.lighter',
              // }),
            }}
          >
            <OutlinedInput
              // value={filterName}
              // onChange={onFilterName}
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
            >
              <MenuItem value="2">2</MenuItem>
            </TextField>
          </Toolbar >

          <Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>

                {/* Table Head */}
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox" />
                    <TableCell
                    >
                      <TableSortLabel
                      >
                        ad
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                    >
                      <TableSortLabel
                      >
                        ad
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                    >
                      <TableSortLabel
                      >
                        ad
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                    >
                      <TableSortLabel
                      >
                        ad
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                    >
                      <TableSortLabel
                      >
                        ad
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                    >
                      <TableSortLabel
                      >
                        ad
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>

                {/* Table Body */}


                <TableBody>
                  <TableRow hover tabIndex={-1} role="checkbox" >
                    <TableCell padding="checkbox" />

                    <TableCell component="th" scope="row" padding="none">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt="s"  />
                        <Typography variant="subtitle2" noWrap>
                          name
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>colleg</TableCell>

                    <TableCell>role</TableCell>

                    <TableCell align="center">cs</TableCell>

                    <TableCell>
                      <Label color={(status === 'banned' && 'error') || 'success'}>sasad</Label>
                    </TableCell>

                    <TableCell align="right">
                      <IconButton >
                        <Iconify icon="eva:more-vertical-fill" />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <Popover
                  >
                    <MenuItem >
                      <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
                      Edit
                    </MenuItem>

                    <MenuItem  sx={{ color: 'error.main' }}>
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

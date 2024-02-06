import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// #region Functions (1)

export default function CourseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Courses</StyledTableCell>
            <StyledTableCell align="center">Classes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.course}>
              <StyledTableCell align="center" component="th" scope="row">
                <Link to={row.link}>{row.course}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.classs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// #endregion Functions (1)

// #region Variables (3)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // your styling goes here
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // your styling goes here
}));
function createData(course, classs, link) {
  return { course, classs, link };
}
const rows = [
  createData('SPCC', 'Comps A', '/compsa'),
  createData('FOSIP', 'Comps B', '/compsb'),
  // Add more rows as needed
];

// #endregion Variables (3)

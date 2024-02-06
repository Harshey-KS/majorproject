// App.js

// import React from 'react';
// import './CourseTable.css';

// const coursesData = [
//   { course: 'SPCC', class: 'TE Comps A' },
//   { course: 'FOSIP', class: 'TE Comps B' },
//   // Add more course data as needed
// ];

// const CourseTable = () => {
//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Course</th>
//             <th>Class</th>
//           </tr>
//         </thead>
//         <tbody>
//           {coursesData.map((course, index) => (
//             <tr key={index}>
//               <td>{course.course}</td>
//               <td>{course.class}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CourseTable;


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(course: string, classs: string) {
//   return { course, classs };
// }

// const rows = [
//   createData('SPCC', 'Comps A'),
//   createData('FOSIP', 'Comps B'),
//   // Add more rows as needed
// ];

// export default function CourseTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 300}} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="center">Courses</StyledTableCell>
//             <StyledTableCell align="center">Classes</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.course}>
//               <StyledTableCell  align="center" component="th" scope="row">
//                 {row.course}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.classs}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }



// CourseTable.jsx
// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#3498db', // Light Blue
//     color: 'white',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: '#ecf0f1', // Light Grey
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(course, classs) {
//   return { course, classs };
// }

// const rows = [
//   createData('SPCC', 'Comps A'),
//   createData('FOSIP', 'Comps B'),
//   // Add more rows as needed
// ];

// export default function CourseTable() {
//   return (
//     <TableContainer component={Paper} className="table-container">
//       <Table sx={{ minWidth: 300 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="center" ><b>COURSES</b></StyledTableCell>
//             <StyledTableCell align="center"><b>CLASSES</b></StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.course}>
//               <StyledTableCell align="center" component="th" scope="row">
//                 {row.course}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.classs}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }




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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // your styling goes here
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // your styling goes here
}));

function createData(course: string, classs: string, link: string) {
  return { course, classs, link };
}

const rows = [
  createData('SPCC', 'Comps A', '/compsa'),
  createData('FOSIP', 'Comps B', '/compsb'),
  // Add more rows as needed
];

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

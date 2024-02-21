import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArchiveIcon from "@mui/icons-material/Archive";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import GradeAssignmentModal from "./GradeAssignmentModal";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 }
];

function createData(name, code) {
  return { name, code };
}

const initialAssignmentState = { name: "", code: "" };

export default function ListAssignment() {
  const [page, setPage] = React.useState(0);
  const [isOpenAddDialog, setIsOpenAddDialog] = React.useState(false);
  const [isOpenSubmittedDialog, setIsOpenSubmittedDialog] = React.useState(
    false
  );
  const [assignmentData, setAssignmentData] = React.useState(
    initialAssignmentState
  );
  const [rows, setRows] = React.useState([
    createData("24/2/24", "Perform Insertion Sort"),
    createData("24/2/24", "Perform Merge Sort"),
    createData("24/2/24", "Dijikistra Algorithm"),
    createData("24/2/24", "N-Queens"),
    createData("24/2/24", "Quick Sort"),
    createData("24/2/24", "Design a Sudoku Solver"),
    createData("24/2/24", "Perform Quick Sort"),
    createData("24/2/24", "N-Queens"),
    createData("24/2/24", "Quick Sort")
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpenAddDialog = () => {
    setIsOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setIsOpenAddDialog(false);
  };

  const handleOpenSubmittedDialog = () => {
    setIsOpenSubmittedDialog(true);
  };

  const handleCloseSubmittedDialog = () => {
    setIsOpenSubmittedDialog(false);
  };

  const handleAddAssignment = () => {
    const newRow = createData(assignmentData.name, assignmentData.code);
    setRows([...rows, newRow]);
    setAssignmentData(initialAssignmentState);
    handleCloseAddDialog();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentData({ ...assignmentData, [name]: value });
  };

  

  return (
    <Paper sx={{ width: "95%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {rows
              .slice(page * 15, page * 15 + 15) // Fixed rows per page to 10
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell style={{ textAlign: 'right' }}>
  {row.code}
  <Button onClick={handleOpenSubmittedDialog} color="primary" >
    <ArchiveIcon />
  </Button>
</TableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: 'center', marginBottom: '10px', padding: '20px' }}>
      <Button onClick={handleOpenAddDialog} variant="contained" color="primary"  style={{ backgroundColor: '#1b093d' }} >
        Add Assignment
      </Button>
      </div>
      <Dialog open={isOpenAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle style={{ textAlign: 'center'}}>ADD ASSIGNMENT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the assignment details:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Deadline"
            type="text"
            fullWidth
            value={assignmentData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="code"
            name="code"
            label="Name"
            type="text"
            fullWidth
            value={assignmentData.code}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog}>Cancel</Button>
          <Button onClick={handleAddAssignment} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isOpenSubmittedDialog} onClose={handleCloseSubmittedDialog}>
        <DialogTitle>Submitted Assignments</DialogTitle>
        <DialogContent>
          {/* Display the list of submitted names here */}
          <DialogContentText>
            <p>Harshey Kaur </p>
            <p>Rajas Baadkar</p>
            <p>Ayush Kedare</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSubmittedDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

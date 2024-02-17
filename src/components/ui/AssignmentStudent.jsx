import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import ArchiveIcon from "@mui/icons-material/Archive";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FileUpload from "./FileUpload"; // Import the FileUpload component

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 }
];

function createData(name, code) {
  return { name, code };
}

export default function AssignmentStudent() {
  const [page, setPage] = React.useState(0);
  const [isOpenSubmittedDialog, setIsOpenSubmittedDialog] = React.useState(
    false
  );
  const [rows] = React.useState([
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

  const handleOpenSubmittedDialog = () => {
    setIsOpenSubmittedDialog(true);
  };

  const handleCloseSubmittedDialog = () => {
    setIsOpenSubmittedDialog(false);
  };

  return (
    <Paper sx={{ width: "95%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {rows
              .slice(page * 15, page * 15 + 15)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      {row.code}
                      <Button
                        onClick={handleOpenSubmittedDialog}
                        color="primary"
                      >
                        <ArchiveIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={isOpenSubmittedDialog}
        onClose={handleCloseSubmittedDialog}
        PaperProps={{ style: { backgroundColor: "#ccc", borderRadius:"20px"} }} // Apply custom style for the dialog
      >
        <DialogTitle align="center">SUBMIT ASSIGNMENT</DialogTitle>
        <DialogContent>
          {/* Replace the content with FileUpload component */}
          <FileUpload />
        </DialogContent>
      </Dialog>
    </Paper>
  );
}

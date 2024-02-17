import React, { useState } from "react";
import { Box, Snackbar, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

// Creating styles
const useStyles = makeStyles({
  cardContainer: {
    background: "#c0e4ff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    maxWidth: "250px",
    marginLeft: "20px"
  },
  cardHeader: {
    color: "darkblue",
    fontSize: "20px",
    marginBottom: "10px",
    alignItems: "center",
  },
});

function TodoStudent() {
  // Creating style object
  const classes = useStyles();

  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows] = useState([
    { id: 1, firstname: "", lastname: "", city: "" },
  ]);

  // Initial state for Snackbar
  const [open, setOpen] = React.useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.cardContainer}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={0.5}>
    
        <TableRow align="center"> </TableRow>
        <div style={{ maxWidth: "200px" }}>
        <Table
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.cardHeader} align="center">ANNOUNCEMENTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstname}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Box>
    </div>
  );
}

export default TodoStudent;

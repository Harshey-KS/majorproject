import React from "react";
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, Snackbar } from "@mui/material";

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

function SyllabusStudent() {
  // Creating style object
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Snackbar
        open={false} // Disable the Snackbar
        autoHideDuration={2000}
      >
        <Alert severity="success">
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={0.5}>
        <Table
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.cardHeader} align="center">SYLLABUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {/* Display syllabus content here */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </div>
  );
}

export default SyllabusStudent;


import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import { Box, Button, Snackbar, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AlignCenter } from "lucide-react";

// Creating styles
const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: "200px",
  },
  snackbar: {
    bottom: "104px",
  },
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
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  rowContainer: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginRight: "10px",
    marginLeft: "10px",

  },
});

function Todo() {
  // Creating style object
  const classes = useStyles();

  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows, setRows] = useState([
    { id: 1, firstname: "", lastname: "", city: "" },
  ]);

  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        firstname: "",
        lastname: "",
        city: ""
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will 
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes 
  // to input elements and record their values in state
  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where 
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation 
  // where user click no 
  const handleNo = () => {
    setShowConfirm(false);
  };

  return (
    <div className={classes.cardContainer}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        className={classes.snackbar}
      >
        <Alert onClose={handleClose} severity="success">
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={0.5}>
    
        <TableRow align="center"> </TableRow>
        <div style={{ maxWidth: "200px" }}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.cardHeader} align="center">ANNOUNCEMENTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <div>
                  <TableRow>
                    {isEdit ? (
                      <div>
                        <TableCell padding="none">
                          <div className={classes.rowContainer}>
                            <input
                              className={classes.input}
                              value={row.firstname}
                              name="firstname"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                            <Button onClick={() => handleRemoveClick(i)} >
                              <ClearIcon />
                            </Button>
                          </div>
                        </TableCell>
                      </div>
                    ) : (
                      <div>
                        <TableCell component="th" scope="row">
                          {row.firstname}
                        </TableCell>
                      </div>
                    )}
                    {/* <Button onClick={handleConfirm}>
                      <DeleteOutlineIcon />
                    </Button> */}
                  </TableRow>
                </div>
              );
            })}
          </TableBody>
        </Table>
        <div className={classes.buttonContainer}>
          <div>
            <Button onClick={handleAdd}>
              <AddBoxIcon onClick={handleAdd} />
              ADD
            </Button>
            {isEdit && ( // Render the SAVE button only when in edit mode
              <Button onClick={handleSave}>
                <DoneIcon />
                SAVE
              </Button>
            )}
            {!isEdit && ( // Render the EDIT button only when not in edit mode
              <Button onClick={handleEdit}>
                <CreateIcon />
                EDIT
              </Button>
            )}
          </div>
        </div>
        </div>
      </Box>
    </div>
  );
}

export default Todo;

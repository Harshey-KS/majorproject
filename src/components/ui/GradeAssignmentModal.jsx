import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const GradeAssignmentModal = ({ studentName, isOpen, handleClose }) => {
  const [grade, setGrade] = useState('');

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your logic to save the grade
    // For example, you can make an API call here
    console.log(`Grade for ${studentName}: ${grade}`);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{`Grade Assignment for ${studentName}`}</DialogTitle>
      <DialogContent>
        <TextField
          label="Grade"
          variant="outlined"
          value={grade}
          onChange={handleGradeChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default GradeAssignmentModal;

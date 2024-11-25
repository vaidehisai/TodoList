import React, { useState } from "react";
import { TableRow, TableCell, TextField, Button } from "@mui/material";

const EditTaskRow = ({ task, onSaveEdit, setEditingTaskId }) => {
  const [editInput, setEditInput] = useState(task.name);

  const handleSave = () => {
    onSaveEdit(task.id, editInput);
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          fullWidth
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button
          color="secondary"
          onClick={() => setEditingTaskId(null)}
        >
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditTaskRow;

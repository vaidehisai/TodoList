import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TaskRow = ({ task, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{task.name}</TableCell>
      <TableCell align="center">
        <IconButton color="primary" onClick={onEdit}>
          <Edit />
        </IconButton>
        <IconButton color="secondary" onClick={onDelete}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;

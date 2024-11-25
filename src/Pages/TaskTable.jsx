import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Button,
} from "@mui/material";

const TaskTable = ({
  tasks,
  editingTaskId,
  setEditingTaskId,
  onDeleteTask,
  onSaveEdit,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  // Paginate filtered tasks
  const paginatedTasks = filteredTasks.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      {/* Search Bar */}
      <TextField
        label="Search Tasks"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Task Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedTasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                {editingTaskId === task.id ? (
                  <TextField
                    defaultValue={task.name}
                    onBlur={(e) => onSaveEdit(task.id, e.target.value)}
                    autoFocus
                  />
                ) : (
                  task.name
                )}
              </TableCell>
              <TableCell align="right">
                {editingTaskId === task.id ? (
                  <Button
                    color="secondary"
                    onClick={() => setEditingTaskId(null)}
                  >
                    Cancel
                  </Button>
                ) : (
                  <>
                    <Button
                      color="primary"
                      onClick={() => setEditingTaskId(task.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      color="error"
                      onClick={() => onDeleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredTasks.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  );
};

export default TaskTable;

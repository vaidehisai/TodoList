import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleAdd = () => {
    onAddTask(taskName);
    setTaskName(""); // Clear input field after adding
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        disabled={!taskName.trim()}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddTask;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AddTask from "./AddTask";
import TaskTable from "./TaskTable";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // To store tasks
  const [editingTaskId, setEditingTaskId] = useState(null); // Task being edited

  // Add a new task
  const handleAddTask = (taskName) => {
    if (taskName.trim()) {
      // Prevent adding duplicate task names
      if (tasks.some((task) => task.name === taskName.trim())) {
        alert("Task name already exists!");
        return;
      }
      setTasks([...tasks, { id: Date.now(), name: taskName.trim() }]);
    } else {
      alert("Task name cannot be empty!");
    }
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  // Save the edited task
  const handleSaveEdit = (id, updatedName) => {
    if (!updatedName.trim()) {
      alert("Task name cannot be empty!");
      return;
    }
    if (tasks.some((task) => task.name === updatedName.trim() && task.id !== id)) {
      alert("Task name already exists!");
      return;
    }
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: updatedName.trim() } : task
      )
    );
    setEditingTaskId(null);
  };

  return (
    <Box sx={{ p: 4, maxWidth: "600px", margin: "auto" ,background:'white',borderRadius:'10px'}}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        To-Do List
      </Typography>
      <AddTask onAddTask={handleAddTask} />
      <TaskTable
        tasks={tasks}
        editingTaskId={editingTaskId}
        setEditingTaskId={setEditingTaskId}
        onDeleteTask={handleDeleteTask}
        onSaveEdit={handleSaveEdit}
      />
    </Box>
  );
};

export default ToDoList;

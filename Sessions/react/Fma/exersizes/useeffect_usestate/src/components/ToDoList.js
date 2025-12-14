import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTask = () => {
    const taskToAdd = {
      id: Date.now(),
      name: newTask.name,
    };

    setTasks(prev => ([
        ...prev,
        taskToAdd
    ]))

    setNewTask({
      id: "",
      name: "",
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="New Task"
        value={newTask.name}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => {
          return <p key={task.id}>{task.name}</p>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;

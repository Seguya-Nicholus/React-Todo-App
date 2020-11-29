import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const todosData = [
    {
      id: 1,
      title: "Take out the Trash",
      completed: false,
    },
    {
      id: 2,
      title: "Have dinner with my wife",
      completed: true,
    },
    {
      id: 3,
      title: "Take children to school",
      completed: false,
    },
    {
      id: 4,
      title: "Go Swimming with Family",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(todosData);

  // function to add an new todo
  const addTodo = (todo) => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);
  };

  // function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Make state for whether or not edit mode
  const [editing, setEditing] = useState(false);


  //Set initial form state
  const initialFormState = { id: null, title: "" };

  //Update Current Todo
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  //Function to Trigger Edit mode and set current Todo
  const editRow = (todo) => {
    setEditing(true);

    setCurrentTodo({ id: todo.id, title: todo.title });
  };

  //Function to Update Todo
  const updateTodo = (id, updatedTodo) => {
    setEditing(false);

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };


  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <h1 className="text-white">React-Todo-App </h1>
      </nav>
      <div className="container">
        <div className="d-flex flex-row">
          <div className="flex-large flex-fill">
            <br />
            {/* <h3 className="text-primary">Add Todo</h3> */}
            {/* <AddTodo addTodo={addTodo}/> */}
            {/* <EditTodo /> */}
            {editing ? (
              <div>
                <h2 className="text-primary">Edit Todo</h2>
                <EditTodo
                  setEditing={setEditing}
                  currentUser={currentTodo}
                  updateUser={updateTodo}
                />
              </div>
            ) : (
              <div>
                <h2 className="text-primary">Add Todo</h2>
                <AddTodo addTodo={addTodo} />
              </div>
            )}
          </div>
          <div className="flex-large flex-fill">
            <br />
            <h2 className="text-primary">Todos List</h2>
            <Todos todos={todos} editRow={editRow} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

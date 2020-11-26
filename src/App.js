import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
// import EditTodo from "./components/EditTodo";
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

  // const state = {
  //   todos: [
  //     {
  //       id: 1,
  //       title: "Take out the Trash",
  //       completed: false,
  //     },
  //     {
  //       id: 2,
  //       title: "Have dinner with my wife",
  //       completed: true,
  //     },
  //     {
  //       id: 3,
  //       title: "Take children to school",
  //       completed: false,
  //     },
  //     {
  //       id: 4,
  //       title: "Go Swimming with Family",
  //       completed: false,
  //     },
  //   ],
  // };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <h1 className="text-white">React-Todo-App </h1>
      </nav>
      <div className="container">
        <div className="d-flex flex-row">
          <div className="flex-large flex-fill">
            <br />
            <h3 className="text-primary">Add Todo</h3>
            <AddTodo />
            {/* <EditTodo /> */}
          </div>
          <div className="flex-large flex-fill">
            <br />
            <h3 className="text-primary">Todos List</h3>
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

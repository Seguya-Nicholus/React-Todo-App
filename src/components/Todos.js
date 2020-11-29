import React from "react";

const Todos = (props) => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <tr key={todo.id}>
            <td></td>
            <td>{todo.title}</td>
            <td style={{ textAlign: "center" }}>
              <input type="checkbox" />
            </td>
            <td>
              <button onClick={()=>props.editRow(todo)} className="btn btn-success">Edit</button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => props.deleteTodo(todo.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td></td>
          <td>No todos</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Todos;

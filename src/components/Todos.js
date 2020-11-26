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
      <tr>
        <td></td> <td>Todo Title Data</td>{" "}
        <td style={{ textAlign: "center" }}>
          <input type="checkbox" />
        </td>
        <td>
          <button className="btn btn-success">Edit</button>{" "}
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>

      {/* {props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td style={{ textAlign: "center" }}>
              <input type="checkbox" />
            </td>
            <td>
              <button className="btn btn-success">Edit</button>{" "}
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )} */}
    </tbody>
  </table>
);

export default Todos;

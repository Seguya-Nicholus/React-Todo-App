import React, { useState } from "react";

const EditTodo = (props) => {

  const [todo, setTodo] = useState(props.currentTodo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateTodo(todo.id, todo);
      }}
    >
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleInputChange}
          class="form-control col-sm-10"
        />
      </div>
      <button className="btn btn-primary">Update todo</button>{" "}
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-outline-primary my-2 my-sm-0"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTodo;

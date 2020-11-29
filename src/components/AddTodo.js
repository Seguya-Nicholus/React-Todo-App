import React, { useState } from "react";

const AddTodo = (props) => {
  const initialFormState = { id: null, title: "" };
  const [todo, setTodo] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!todo.title) return;

        props.addTodo(todo);
        setTodo(initialFormState);
      }}
    >
      <div className="form-group">
        <label className="text-dark">Title</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleInputChange}
          class="form-control col-sm-10"
          placeholder="Enter Title"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add new Todo
      </button>
    </form>
  );
};

export default AddTodo;

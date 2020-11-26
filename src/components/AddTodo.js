import React from "react";

const AddTodo = (props) => {
  return (
    <form>
      <div className="form-group">
        <label className="text-dark">Title</label>
        <input
          type="text"
          name="name"
          value=""
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

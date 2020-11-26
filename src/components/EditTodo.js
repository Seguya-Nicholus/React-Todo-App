import React from "react";

const EditTodo = (props) => {
  return (
    <form>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="name"
          value=""
          class="form-control col-sm-10"
        />
      </div>

      <button className="btn btn-primary">Update todo</button>{" "}
      <button className="btn btn-outline-primary my-2 my-sm-0">Cancel</button>
    </form>
  );
};

export default EditTodo;

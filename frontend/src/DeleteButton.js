import React from "react";

function DeleteButton(props) {
  return (
    <div>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-danger"
      >
        Usuń
      </button>
      <br />
      <br />
    </div>
  );
}

export default DeleteButton;

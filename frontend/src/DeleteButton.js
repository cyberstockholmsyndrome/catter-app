import React from "react";

function DeleteButton(props) {
  return (
    <button onClick={() => props.onDelete(props.id)} className="btn btn-danger">
      Usuń
    </button>
  );
}

export default DeleteButton;

import React from "react";

function DeleteButton(props) {
  return <button onClick={() => props.onDelete(props.id)}>Usuń</button>;
}

export default DeleteButton;

import React from "react";
import Body from "./Body";
import DateNote from "./DateNote";
import DeleteButton from "./DeleteButton";

function Item({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="contact-item">
      <DateNote id={id} title={title} createdAt={createdAt} />
      <Body title={title} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default Item;

import React from "react";
import { showFormattedDate } from "../utils/data";

function DateNote({ title, createdAt }) {
  return (
    <div className="contact-item__root">
      <p className="contact-item__title">{title}</p>
      <p className="contact-item__date">{showFormattedDate(createdAt)}</p>
    </div>
  );
}
export default DateNote;

import React from "react";
import Item from "./Item";

function List({ contacts, onDelete }) {
  return contacts.length > 0 ? (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Item
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  ) : (
   <center> <p className="contact-list__kosong">Tidak Ada Catatan</p></center>
  );
}

export default List;

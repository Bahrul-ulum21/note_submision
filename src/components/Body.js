import React from 'react';
 
function Body({ title, body }) {
 return (
   <div className="contact-item__body">
     <h3 className="contact-item__title">{title}</h3>
     <p className="contact-item__body">{body}</p>
   </div>
 );
}
 
export default Body;
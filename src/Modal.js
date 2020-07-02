import React from "react";
import ReactDOM from "react-dom";
const { createPortal } = ReactDOM;
//SomeHow it doesnt work:
//import { Link } from "react-router-dom";

const Modal = ({ children, onClose, open }) => (
  open
    ? createPortal(
      //what to render
      <div className="modal">
        {/* 
          <Link to="/modals">
            <button onClick={onClose} className="modal__close">
            &times;</button>
        </Link>

        */}
             <button onClick={onClose} className="modal__close">
            &times;</button>
          {children}
        </div>,
        //where to render
        document.body
      )
    : null
);

 export default Modal;

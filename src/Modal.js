import React from "react";
import ReactDOM from "react-dom";
const { createPortal } = ReactDOM;
//SomeHow it doesnt work:
//import { Link } from "react-router-dom";

const Modal = ({ children, onClose, open, props }) =>
  open
    ? createPortal(
        //what to render
        <div className="modal">
          <button onClick={onClose} className="modal__close">
            &times;
          </button>
          {children}
        </div>,
        //where to render
        document.body
      )
    : null;

export default Modal;

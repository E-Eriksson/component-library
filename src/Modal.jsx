import "./Modal.css";
import React from "react";

const Header = ({ children }) => {
  return <div className="modalHeader">{children}</div>;
};

const Body = ({ children }) => {
  return <div className="modalBody">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="modalFooter">{children}</div>;
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  Modal.Header = Header;
  Modal.Body = Body;
  Modal.Footer = Footer;

  return (
    <div onClick={onClose} className="modalBackground">
      <div className="modal">{children}</div>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

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

const sizes = {
  large: "modalLarge",
  small: "Small",
};

const Modal = ({ isOpen, size = small, children, onClose }) => {
  if (!isOpen) return null;
  Modal.Header = Header;
  Modal.Body = Body;
  Modal.Footer = Footer;
  const combinedClass = sizes[size] + " modal";
  return (
    <div className="modalBackground" onClick={onClose}>
      <div className={combinedClass} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

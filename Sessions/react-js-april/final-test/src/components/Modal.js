import React, { useState } from "react";
import "./modal.css"; 

const Modal = ({message, onReject, onSubmit}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="modal-btn yes" onClick={onSubmit}>Yes</button>
          <button className="modal-btn no" onClick={onReject}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
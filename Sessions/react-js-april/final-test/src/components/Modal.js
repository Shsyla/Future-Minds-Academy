import React from "react";
import "./modal.css";

const Modal = ({
  title,
  onCancel,
  onSubmit,
  isEditing = false,
  handleChange,
  editData
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h1>{title}</h1>

        {isEditing && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="New Name"
              value={editData.name}
              onChange={handleChange}
            /> 
            {" "}
            <input
              type="text"
              name="email"
              placeholder="New Email"
              value={editData.email}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="modal-buttons">
          <button className="modal-btn no" onClick={onCancel}>
            Cancel
          </button>
          <button className="modal-btn yes" onClick={onSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { useNavigate } from "react-router-dom";
import editar from "../../assets/icons/edit.png";
import excluir from "../../assets/icons/delete.png";

const Btns = ({ onEdit, onDelete }) => {
  const nav = useNavigate();

  const handleEditClick = () => {
    if (onEdit) {
      onEdit();
    } else {
      nav("/BtnEditar");
    }
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete();
    } else {
      nav("/BtnDeletar");
    }
  };

  return (
    <>
      <div className="botoes">
        <button onClick={handleEditClick}>
          <img src={editar} alt="" />
        </button>
        <button onClick={handleDeleteClick}>
          <img src={excluir} alt="" />
        </button>
      </div>
    </>
  );
};

export default Btns;

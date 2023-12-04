import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import editar from "../../assets/icons/edit.png";
import excluir from "../../assets/icons/delete.png";
import BtnEditar from "./btnEditar";

const Btns = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="botoes">
        <button onClick={() => nav("/BtnEditar")}>
          <img src={editar} alt="" />
        </button>
        <button onClick={() => nav("/BtnDeletar")}>
          <img src={excluir} alt="" />
        </button>
      </div>
    </>
  );
};

export default Btns;

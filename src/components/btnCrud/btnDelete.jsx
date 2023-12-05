import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../btnAdicionar/btnAdicionar.css";
import HomeLog from "../../pages/homeLog";

const BtnDeletar = ({ idProduto }) => {
  const nav = useNavigate();

  const handleDeletar = async () => {
    try {
      const response = await axios.delete(
        `https://funny-handkerchief-newt.cyclic.app/deletar/${idProduto}`
      );

      if (response.status === 200) {
        // Item deletado com sucesso
        nav("/logado");
      } else {
        console.error("Erro ao deletar o item:", response.data);
        // Tratar erro ao deletar o item
      }
    } catch (error) {
      console.error("Erro ao deletar o item:", error.message);
      // Tratar erro ao deletar o item
    }
  };

  return (
    <>
      <HomeLog />
      <div className="popup">
        <div className="container-add">
          <h1>Tem certeza?</h1>
          <div className="btns">
            <button className="BtnCancelar" onClick={() => nav("/logado")}>
              Cancelar
            </button>
            <button className="BtnDeletar" onClick={handleDeletar}>
              Deletar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnDeletar;

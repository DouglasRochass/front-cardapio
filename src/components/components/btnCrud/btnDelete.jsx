import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeLog from "../../pages/homeLog";
import axios from "axios";

const BtnDeletar = ({ onDeletar, onCancelar, categoria, id }) => {
  const handleDeletar = async () => {
    try {
      console.log("Iniciando a exclusão para o item com ID:", id);
      if (!id) {
        toast.error("ID do item não especificado. Operação de exclusão cancelada.");
        return;
      }

      // Substitua a URL abaixo pela sua rota de exclusão real
      const response = await axios.delete(`https://funny-handkerchief-newt.cyclic.app/deletar/${id}`);

      // Verifica o status da resposta
      if (response.status === 200) {
        toast.success("Item deletado com sucesso.");
        onDeletar(id);
      } else {
        toast.error("Erro ao deletar o item. Revise as informações.");
      }
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
      toast.error("Erro ao deletar o item. Revise as informações.");
    }
  };

  const handleCancelar = () => {
    onCancelar();
  };

  return (
    <>
      <HomeLog />
      <div className="popup">
        <div className="container-add">
          <h1>Tem certeza?</h1>
          <div className="btns">
            <button className="BtnCancelar" onClick={handleCancelar}>
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

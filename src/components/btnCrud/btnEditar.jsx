import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../btnAdicionar/btnAdicionar.css";
import HomeLog from "../../pages/homeLog";

const BtnEditar = () => {
  const nav = useNavigate();

  function navegar() {
    nav("/logado");
  }

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  function handleSalvar() {
    if (nome === "" || valor === "" || descricao === "") {
      toast.warning("Preencha todos os campos!");
    } else {
      //manda pro banco se tiver tudo certo
      toast.success("Item salvo com sucesso!");
    }
  }

  return (
    <>
      <HomeLog />
      <div className="popup">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <div className="container-add">
          <div className="top">
            <h1>Editar Item</h1>
            <button onClick={navegar} className="add-sair">
              {" "}
              ✕
            </button>
          </div>
          <div className="add-form">
            <div className="form-item">
              <h3>Nome do Item:</h3>
              <input
                type="text"
                placeholder="Ex: X-Tudo"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-item">
              <h3>Valor:</h3>
              <input
                type="text"
                placeholder="R$"
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
            <div className="form-item">
              <h3>Descrição:</h3>
              <input
                type="text"
                className="descricao"
                placeholder="Ex: Pão, Hamburguer, etc."
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <div className="form-item">
              <h3>Categoria: </h3>
              <select
                name={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="categoria"
              >
                <option value="lanches">Lanches</option>
                <option value="salgados">Salgados</option>
                <option value="bebidas">Bebidas</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>
          <div className="botoes-add">
            {/* retornando um array com as opcoes (nome, valor, descricao e categoria) */}
            {/* <button onClick={() => {console.log([nome, valor, descricao, categoria])}}>Salvar</button> */}
            <button onClick={() => handleSalvar()}>Salvar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnEditar;

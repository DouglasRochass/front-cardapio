import React, { useState } from "react";
import plus from "../../assets/icons/plus.png";
import { ToastContainer, toast } from 'react-toastify';
import "./btnAdicionar.css";

function BtnAdicionar() {
  const [openModal, setOpenModal] = useState(false);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  async function handleSalvar() {
    if (nome === "" || valor === "" || descricao === "") {
      toast.warning("Preencha todos os campos!");
    } else {
      try {
        const response = await fetch('https://funny-handkerchief-newt.cyclic.app/criar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://funny-handkerchief-newt.cyclic.app', // Adicione este cabeçalho
          },
          body: JSON.stringify({
            nome,
            preco: valor,
            descricao,
            categoria,
          }),
        });

        if (response.ok) {
          toast.success("Item salvo com sucesso!");
          setOpenModal(false);
        } else {
          toast.error("Não foi possível adicionar o item.");
        }
      } catch (error) {
        console.error("Erro ao salvar o item:", error);
        toast.error("Erro ao salvar o item. Revise as informações.");
      }
    }
  }
  return (
    <>
      <div className="container-botao">
        <button className="botao-add" onClick={() => setOpenModal(true)}>
          <img src={plus} alt="plus" className="plus" />
          <span className="botao-txt">Adicionar Item</span>
        </button>
      </div>
      {openModal && (
        <>
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
                <h1>Novo item</h1>
                <button
                  onClick={() => setOpenModal(false)}
                  className="add-sair">
                  ✕
                </button>
              </div>
              <div className="add-form">
                <div className="form-item">
                  <h3>Nome do Item:</h3>
                  <input type="text" placeholder="Ex: X-Tudo" 
                  onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="form-item">
                  <h3>Valor:</h3>
                  <input type="text" placeholder="R$" 
                  onChange={(e) => setValor(e.target.value)}/>
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
      )}
    </>
  );
}

export default BtnAdicionar;

import React, { useState, useEffect } from "react";
import axios from "axios";
import editar from "../../../assets/icons/edit.png";
import excluir from "../../../assets/icons/delete.png";
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";
import Btns from "../../btnCrud/btns";
import BtnDeletar from '../../btnCrud/btnDelete';

const Lanches = () => {
  const [lanches, setLanches] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    axios.get('https://funny-handkerchief-newt.cyclic.app/buscar/lanches')
      .then(response => {
        setLanches(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens da categoria "bebidas" da API:', error);
      });
  }, []);

  const handleEdit = () => {
    console.log("Editar item com ID:", selectedId);
    // Implemente a lógica de edição aqui, por exemplo, redirecionar para a página de edição
  };

  const handleDelete = () => {
    console.log("Excluir item com ID:", selectedId);
    // Implemente a lógica de exclusão aqui
    // Por exemplo, abrir um modal de confirmação ou chamar a função de exclusão direta
  };

  return (
    <>
      <HeaderLog />
      <BtnAdicionar />
      <CategoriasLog />
      <div className="container-lanche">
        <h1>Lanches</h1>
        {lanches.map(item => (
          <div key={item.id} className="card">
            <div className="lanche-txt">
              <h3 id="nome">{item.nome}</h3>
              <h4 id="descricao">{item.descricao}</h4>
              <h3 id="preco">{`R$${item.preco}`}</h3>
            </div>
            <Btns
              onEdit={() => {
                setSelectedId(item.id);
                handleEdit();
              }}
              onDelete={() => {
                setSelectedId(item.id);
                handleDelete();
              }}
            />
          </div>
        ))}
      </div>
      {selectedId && (
        <BtnDeletar
          onDeletar={() => {
            // Handle deletion completion if needed
            setLanches(prevLanches => prevLanches.filter(item => item.id !== selectedId));
            setSelectedId(null);
          }}
          onCancelar={() => setSelectedId(null)}
          categoria="lanches"
          id={selectedId}
        />
      )}
    </>
  );
};

export default Lanches;

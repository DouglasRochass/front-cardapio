import React, { useState, useEffect } from "react";
import axios from "axios";
import editar from "../../../assets/icons/edit.png";
import excluir from "../../../assets/icons/delete.png";
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";
import Btns from "../../btnCrud/btns";

const Outros = () => {
  const [outros, setOutros] = useState([]);

  useEffect(() => {
    // Substitua a URL abaixo pela sua API e rota correta para obter itens da categoria "bebidas"
    axios.get('https://funny-handkerchief-newt.cyclic.app/buscar/outros')
      .then(response => {
        setOutros(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens da categoria "bebidas" da API:', error);
      });
  }, []);

  return (
    <>
      <HeaderLog />
      <BtnAdicionar />
      <CategoriasLog />
      <div className="container-lanche">
        <h1>Outros</h1>
        {outros.map(item => (
          <div key={item.id} className="card">
            <div className="lanche-txt">
              <h3 id="nome">{item.nome}</h3>
              <h4 id="descricao">{item.descricao}</h4>
              <h3 id="preco">{`R$${item.preco}`}</h3>
              
            </div>
            <Btns/>
          </div>
          
        ))}
        
      </div>
    </>
  );
};

export default Outros;

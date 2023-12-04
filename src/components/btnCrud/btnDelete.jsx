import "../btnAdicionar/btnAdicionar.css";
import HomeLog from "../../pages/homeLog";
import { useNavigate } from "react-router-dom";

const BtnDeletar = () => {

  const nav = useNavigate()

  return (
    <>
    <HomeLog/>
      <div className="popup">
        <div className="container-add">
          <h1>Tem certeza?</h1>
          <div className="btns">
            <button className="BtnCancelar" 
            onClick={() => nav("/logado")}>Cancelar</button>
            <button className="BtnDeletar">Deletar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnDeletar;

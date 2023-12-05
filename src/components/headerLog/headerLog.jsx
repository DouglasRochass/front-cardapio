import "../header/header.css";
import icone from "../../assets/icons/leave.png";
import { useNavigate} from "react-router-dom";


const HeaderLog = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="header-container">
        <div className="header-top">
          <h1>Cantina Senai</h1>
          {/* botao de sair da parte logada e voltar para o usuario */}
          <button onClick={() => nav("/")} className="header-btn">
            <img src={icone} alt="icon" id="icon-user" />
          </button>
        </div>
        <div className="pesquisa">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input type="text" placeholder="O que procura?" id="pesquisa" />
        </div>
      </div>
    </>
  );
};

export default HeaderLog;

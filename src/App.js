import React from "react";
import Produto from "./components/Produto";
import style from "./css/Style.css";

function App() {
  const [produto, setProduto] = React.useState(null); // por boas praticas inicia-se com 'produto e setProduto' e com null

  React.useEffect(() =>{
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null) setProduto(produtoLocal)
    console.log(produtoLocal)
  }, []) //[] servem para a função executar uma vez somente e não ficar em loop

  React.useEffect(() => {
    if(produto !== null)
    window.localStorage.setItem('produto', produto)
  },[produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
    const alvoProduto = setProduto;
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>

      <button className="produto" onClick={handleClick}>
        notebook
      </button>
      <button className="produto" onClick={handleClick}>
        smartphone
      </button>

      <Produto produto={produto} />

      {/* {carregando && <p>carregando...</p>} */}
      {/* {!carregando && dados && <Produto />} */}
    </div>
  );
}

export default App;

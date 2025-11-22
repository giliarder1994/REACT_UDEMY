import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [nome, setNome] = useState("Luíse");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for, sim!</p>}
      {!x && <p>Agora x é falso</p>}

      <h1>IF Ternario</h1>
      {nome === "Giliarde" ? (
        <div>
          <p>O nome é Giliarde!</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setNome("Giliarde")}>Clique aqui</button>
    </div>
  )  
}
export default ConditionalRender;
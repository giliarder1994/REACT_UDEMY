const Events = () => {

  const handleMyEvent = (e) => { //Este "e" é de "event" que são os dados que o evento contem
    console.log(e)

    console.log("Ativou o evento!")
  };

  const renderSomething = (x) => {

    if(x) {

      return <h1>Renderizando isso</h1>

    }else {

      return <h1>Renderizando isso aqui também</h1>

    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
        <button onClick={() => {
          if(true){ // Não é o ideal colocar isso aqui pois estamos colocando a logica dentro do HTML 
            console.log("Isso nao deveria exixtir =)");
          }
        }}>Clique aqui, por favor!</button> 
      </div> 
      {renderSomething(true)};
      {renderSomething(false)};
    </div>
  )

}

export default Events;
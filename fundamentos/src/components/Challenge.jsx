const Challenge = () => {

    const x = 5;
    const y = 2;
    const soma = x + y;

    console.log(x, y);

  return (
    <div>

      <button onClick={() => console.log("A soma de " + x + " e " + y + " é igual a " + soma)}>Clique aqui</button>

    </div>
  )

}

export default Challenge;
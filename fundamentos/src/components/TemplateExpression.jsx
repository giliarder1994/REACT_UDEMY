const TemplateExpression = () => {
  const name = "Giliarde"
  const data = {
    idade: 31,
    profissao: "Programador"
  }
  
  return (
    <div>
      <h1>Olá {name}, seja bem-vindo!</h1>
      <p>Você atua como: {data.profissao}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  )

}

export default TemplateExpression;
import MyComponent from './MyComponent';

// arquivo de estilo

const FirstComponent = () => {

  // comentarios nos componentes do react podem ser feito dessa forma 

  return (
    <div>
      {/*comentario jsx pode ser feito desta forma tambem*/}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent/>
    </div>
  )

}

export default FirstComponent;
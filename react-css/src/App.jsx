import './App.css'
import MyComponent from './components/MyComponent'
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Giliarde");
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS no React</h1>
      {/* CSS de componentes */}
      <MyComponent />
      <p>Este paragrafo é do App.jsx</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      {/* CSS Inline Dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>CSS dinamico</h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>CSS dinamico</h2>

      <h2 style={name === "Giliarde" ? { color: "green", backgroundColor: "black" } : null}>Teste nome</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />

      <h2 className="my_title">Testando</h2> {/* não recebe a classe, pois ela é scope, só funciona para o arquivo "Title" em si */}
      
    </div>

  )
}

export default App

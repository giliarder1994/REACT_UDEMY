import './App.css'
import Paisagem02 from './assets/paisagem02.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  //const name = "Lucielen"
  const [userName] = useState("Luíse e Gustavo")

  const cars = [
    {id: 1, brand: "Mercedes", km: 0, color: "Cinza", newCar: true},
    {id: 2, brand: "Limousine", km: 10000, color: "Preto", newCar: false},
    {id: 3, brand: "HotWhells", km: 30000, color: "Laranja", newCar: false}
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/paisagem01.jpg" alt="Paisagem" width="500px"/>
      </div>
      <div>
        <img src={Paisagem02} alt="Linda paisagem" width="500px"/> 
      </div>

      <ManageData/>

      <ListRender/>

      <ConditionalRender/>

      {/* props */}
      <ShowUserName name={userName}/>

      {/* destrusturing */}
      <CarDetails brand="BMW" km={1000} color="Azul" newCar={false}/>

      {/* reaproveitando */}
      <CarDetails brand="Ferrari" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="BYD" km={1000} color="Prata" newCar={false}/>

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}
        />
      ))}

      {/* Fragments */}
      <Fragments propFragment="teste"/>

      {/* children */}
      <Container myValue="Testing">
        <p>E este é o conteudo!</p>
      </Container>
      <Container myValue="Testing 2">
        <h5>Testanto container</h5>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

    </div>
  )
}

export default App

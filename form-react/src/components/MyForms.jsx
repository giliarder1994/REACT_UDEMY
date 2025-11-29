import './MyForms.css'
import {useState} from 'react';

const MyForms = ({user}) => {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }
  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email, bio);

    // 7 - limpar formulario
    setName("");
    setEmail("");
    setBio("");
  }

  

  return (
    <div>
      {/* 5 - Envio de Formulario */}
      {/* 1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} 
          value={name}
          />
        </div>
        {/*  2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} 
          value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
export default MyForms;
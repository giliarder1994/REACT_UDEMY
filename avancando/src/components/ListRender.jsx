import {useState} from 'react';

const ListRender = () => {
  const [list] = useState(["Giliarde", "Lucielen", "Luíse", "Gustavo"])

  const [users, setUsers] = useState([
    {id: 1, nome: "Giliarde", idade: 31},
    {id: 2, nome:"Anderson", idade: 25},
    {id: 3, nome:"André", idade: 35}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id)

    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.nome} - {user.idade}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )

}
export default ListRender;
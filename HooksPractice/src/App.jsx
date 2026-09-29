import { useState } from "react"

function App() {

  let arr = ['muneesh', 'roopali', 'shefali', 'yogesh', 'saroj']

  const [user, setUser] = useState(0);

  function changeUser() {
    if (user < arr.length - 1) {
      setUser(user + 1)
    }
  }

  function previousUser() {
    if (user < arr.length && user > 0) {
      setUser(user - 1)
    }
  }


  return (
    <div className="bg-black h-screen text-white px-6 py-4 ">
      <h1 className="mb-4 text-xl font-bold ">{arr[user]}</h1>
      <button onClick={previousUser} className=" px-6 py-4 bg-green-500 rounded-sm ">Prev user</button>
      <button onClick={changeUser} className="ml-2 px-6 py-4 bg-green-500 rounded-sm ">next user</button>

    </div >
  )
}

export default App

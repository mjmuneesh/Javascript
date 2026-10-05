import { useState } from "react";

function App() {

  const [name, setName] = useState('')

  const [allusers, setAllusers] = useState([])

  function submithandler(e){
    e.preventDefault();
    // console.log(name)
    const newallusers = [...allusers];
    newallusers.push(name)
    setAllusers(newallusers)
    setName('')
    console.log(newallusers)
    // console.log(allusers)
   
  }

  return (
    <div className="bg-zinc-800 h-screen p-4">
    <form onSubmit={(e)=>{
        submithandler(e);
      }} className="bg-zinc-800  text-white p-3">
      <input onChange={(e)=>{ setName(e.target.value) }} className="text-white border-2 rounded p-2" type="text" name="name" placeholder="enter your name"  value={name}/>
      <button className="ml-2 bg-green-400 p-3 rounded-xl " >Submit</button>
    </form>
    {allusers.map((elem,idx)=>{
      return <h1 key={idx} className="text-white">{elem}</h1>
    })}
    </div>

    
  )
}

export default App

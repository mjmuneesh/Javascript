import axios from 'axios'
import { useState } from 'react'
import UserCard from './components/UserCard'

function App() {

const [alluser,  setAlluser] =useState([])

async function getData(){
const response = await axios.get('https://jsonplaceholder.typicode.com/users')
console.log(response.data)
setAlluser(response.data)



}

  return (
   <div className="min-h-screen bg-zinc-800 text-white p-4 ">
    <button className="bg-green-700 rounded-xl p-2" onClick={getData}>Get Data</button>
    <div className='flex flex-wrap gap-4'>
      {alluser.map((elem,idx)=>{
      return <div key={idx}> 
         <UserCard  elem ={elem}/>
        </div>
    
    })}
    </div>
    
   </div>
  )
}

export default App

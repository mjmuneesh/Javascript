import React, {useState} from "react";
import Card from "./components/Card";


function App(){
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState('')
  const [desigination, setDesigination] = useState('')
  const [description, setDescription] = useState('')
  let local = JSON.parse(localStorage.getItem("olduser")) || []
  const[alluser, setAlluser]= useState(local);
  console.log(local)


function submitHandler(e){
e.preventDefault();
// console.log("submitted")
const olduser = [...alluser]
olduser.push({username, profile, description, desigination})
setAlluser(olduser)
localStorage.setItem('olduser', JSON.stringify(olduser))
console.log(olduser)
setProfile('')
setUsername('')
setDescription('')
setDesigination('')
}

function deleteHandler(idx){
  const deluser  = [...alluser]
  deluser.splice(idx ,1)
  setAlluser(deluser)
  localStorage.setItem('olduser', JSON.stringify(deluser))
}

  return (
  <div className="bg-zinc-800 min-h-screen text p-4  ">
    <form 
    onSubmit={(e)=>{submitHandler(e)}}>
  
      <input
      onChange={(e)=>{setProfile(e.target.value)}}
      className="text-white border-2 p-2 mr-3"
      type="text" 
      value={profile}
      placeholder="Your Job Profile Url"
      />

      <input
      onChange={(e)=>{setUsername(e.target.value)}}
      className="text-white border-2 p-2 mr-3"
      type="text" 
      value={username}
      placeholder="Enter your Username"
      />

      <input
      onChange={(e)=>{setDesigination(e.target.value)}}
       className="text-white border-2 p-2 mr-3"
      type="text" 
      value={desigination}
      placeholder="Enter your Designation"
       />

      <input
      onChange={(e)=>{setDescription(e.target.value)}}
       className="text-white border-2 p-2 mr-3"
      type="text" 
      value={description}
      placeholder="Enter your Description"
      />

      <button className="bg-green-600 p-2 rounded text-white">Submit</button>
    </form>
    <div className="flex  items-center gap-8">
    {alluser.map((user, idx)=>{
      return <Card  idx={idx} user={user} deleteHandler = {deleteHandler}
      />
      
    })}
    </div>
    
  </div>
  )
}


export default App
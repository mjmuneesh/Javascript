import { useState } from "react";

function GraceMarks(){

const [marks , setMarks] = useState([20,30,40,50,60]);


function grace(){
let newMarks = marks.map((num)=>{
    return num + 5
})
    setMarks(newMarks)
}


return(

      <div className="bg-zinc-800 h-screen text-white p-3 ">
       { marks.map((elem, idx)=>{
        return <h1 key={idx}>Student {idx +1} Marks are {elem}</h1>
        })}
    <button onClick={grace} className="bg-green-300 p-2 rounded-xl mt-2 text-black">Give them Grace</button>
    </div>

)

}

export default GraceMarks;
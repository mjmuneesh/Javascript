import React, { useState } from 'react'

const Washroom = () => {

const [gender , setGender] = useState("male")

function genderChange(){
    if(gender == 'male'){
        setGender("female")
    }else{
        setGender('male')
    }
}

  return (
    <div className='bg-zinc-800 p-4 h-screen text-white'>
      <h1 className='font-bold text-xl'>{gender}</h1>
      <h1>{gender== 'male' ? 'male washroom' : 'female washroom'}</h1>
      <button onClick={genderChange} className='bg-blue-400 p-2 rounded-xl mt-4'>Change Gender</button>
    </div>
  )
}

export default Washroom
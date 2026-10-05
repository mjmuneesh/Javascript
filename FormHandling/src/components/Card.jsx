import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[200px] h-[19vw] bg-white p-4 rounded-xl my-4'  >
        <div className='fit-cover rounded-xl'>
        <img src={props.user.profile} alt="" />
        </div>
      <h1 className='text-black text-center font-bold'>{props.user.username}</h1>
      <h1 className='text-black text-center'>{props.user.desigination}</h1>
      <p className='text-black text-center'>{props.user.description}</p>
      <button onClick={()=>{
        props.deleteHandler(props.idx);
      }}
      className='bg-red-800 rounded p-2 text-white'
      >Delete User</button>
    </div>
  )
}

export default Card
import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[200px] h-[23vw] bg-white p-4 rounded-xl my-4 flex flex-col'  >
        <div className='object-cover rounded-xl mb-2'>
        <img src={props.user.profile} alt="" />
        </div>
      <h1 className='text-black text-center font-bold'>{props.user.username}</h1>
      <h1 className='text-black text-center'>{props.user.desigination}</h1>
      <p className='text-black text-center mb-2'>{props.user.description}</p>
      <button onClick={()=>{
        props.deleteHandler(props.idx);
      }}
      className='bg-red-800 rounded p-2 text-white'
      >Delete User</button>
    </div>
  )
}

export default Card
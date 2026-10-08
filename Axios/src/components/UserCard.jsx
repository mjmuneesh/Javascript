import React from 'react'

const UserCard = (props) => {
  return (
   <div className='w-[200px] h-[23vw] bg-white p-4 rounded-xl my-4 flex flex-col'  >

      <h1 className='text-black text-center font-bold'>{props.elem.name}</h1>
      <h1 className='text-black text-center font-bold'>{props.elem.username}</h1>
      <h1 className='text-black text-center font-bold'>{props.elem.email}</h1>
    </div>
  )
}

export default UserCard
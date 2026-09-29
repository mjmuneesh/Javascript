import React from 'react'

const Navbar = (props) => {
    console.log(props)
    return (
        <div className=' bg-blue-400  flex items-center justify-between mb-2 '>
            <h1 className='font-semibold px-4 py-2'>{props.title}</h1>
            <div className='flex gap-10 px-10'>
                {props.links.map((elem) => {
                    return <h1 key={elem}>{elem}</h1>
                })}
            </div>
        </div>
    )
}

export default Navbar
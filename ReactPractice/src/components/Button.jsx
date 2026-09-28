import React from 'react'

const Button = (props) => {
    console.log(props)

    return (
        <div className="text-white bg-red-400 px-4 py-4 m-6 mt-2 rounded w-fit">
            <button> {props.text}</button >
        </div >
    )
}

export default Button
import React from 'react'

const Button = (props) => {
    return (
        <div className="text-white bg-red-400 rounded-xl p-2 w-fit ">
            <button> {props.text}</button >
        </div >
    )
}

export default Button
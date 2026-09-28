import Button from "./Button"

function Card(props) {
    return (
        <div className="text-white bg-blue-400 p-3 m-2 w-fit rounded">
            <h1 className="text-white">Hi My name is {props.user} and my age is {props.age}</h1>
            <Button text='View Profile' />
        </div>
    )


}

export default Card
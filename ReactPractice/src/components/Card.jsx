import Button from "./Button"

function Card(props) {

    console.log(props)
    return (
        <div className='bg-white w-[220px] h-[320px] text-black px-4 py-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg'>
            <img className='w-24 h-24 rounded-full object-cover mb-4 border-2 border-zinc-200' src={props.profileImage} alt="" />
            <h1 className='text-lg font-bold'>{props.name}</h1>
            <p className='text-md text-zinc-900'>{props.age}</p>
            <p className='text-md text-zinc-900 mt-1'>{props.designation}</p>
        </div>


    )


}

export default Card
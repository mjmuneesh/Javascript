import Card from './components/Card.jsx'
import Button from './components/Button.jsx'


function App() {

  return (
    <div className='h-screen bg-black p-3'>
      <Card user='Muneesh' age='20' />
      {/* <Card user='Ashima' age='10' /> */}
      <Button text='Order Now' />
    </div>

  )
}

export default App

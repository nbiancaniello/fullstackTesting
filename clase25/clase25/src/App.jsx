import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [mostrarParrafo, setMostrarParrafo] = useState(false);

  const handleClicEnMostrarParrafo = () =>{
    setMostrarParrafo(!mostrarParrafo);
  }

  return (
    <>
      <h1>Contador</h1>
      <div className="card boton">
        <p>Contador actual es: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Contar
        </button>
        <button onClick={() => setCount(0)}>
          Reset Contador
        </button>

        <button onClick={handleClicEnMostrarParrafo}>
          {mostrarParrafo ? 'Ocultar parrafo' : 'Mostrar parrafo'}
        </button>
        {mostrarParrafo && (
          <div className='parrafo'> 
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil consequuntur at. Perspiciatis, et expedita fuga adipisci, neque, facere quo tenetur tempora provident eum aliquam itaque quis minima doloribus modi. </p>


          </div>
        )}
      </div>
    </>
  )
}

export default App

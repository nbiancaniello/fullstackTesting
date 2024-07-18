import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Menu from './componentes/menu/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from './componentes/sobre/Sobre';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Router>
        <Menu />
        <main>
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </main>
      </Router>

      </div>
      <Button variant='primary'>Test</Button>{' '}
      <Alert variant="success">This is a success alert—check it out!</Alert>
    </>
  )
}

export default App

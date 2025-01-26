import { useState } from 'react'
import Pagina from './front'
import "./front/styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='brackground-global'>
      <Pagina></Pagina>
            <footer className="text-center rodape " style={{ backgroundColor: "#212529", color: "white", position: "relative"}}>
                <p style={{margin: "0px", padding: "0px"}}>&copy; Projeto criado pelo grupo 3 de ADM</p>
            </footer>
    </div>
  )
}

export default App

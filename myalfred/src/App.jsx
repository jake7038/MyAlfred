import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pagina from './front'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pagina></Pagina>
    </>
  )
}

export default App

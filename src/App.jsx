import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CampusComponet from './campus/CampusComponet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < CampusComponet/>
    </>
  )
}

export default App

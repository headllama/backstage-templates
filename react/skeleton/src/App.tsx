import { useState } from 'react'
import logo from './assets/logo_sysmap.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-full items-center justify-center">
          <img src={logo} className="" alt="logo" />
      </div>
      <h1>Start React WebApp</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to start your development
        </p>
      </div>
      <p className="text-zinc-500 font-bold">
        Click on the logo to learn more
      </p>
    </>
  )
}

export default App

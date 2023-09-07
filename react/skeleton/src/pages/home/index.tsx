import { useState } from 'react'
import logo from '../../assets/logo_sysmap.svg'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col justify-center items-center gap-6 w-screen h-screen">
      <div className="flex w-96 items-center justify-center">
        <img src={logo} className="" alt="logo" />
      </div>
      <h1>Start React WebApp</h1>
      <div className="flex flex-col justify-center">
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
    </main>
  )
}

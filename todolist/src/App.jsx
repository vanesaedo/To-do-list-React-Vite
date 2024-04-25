import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './FormInputTask'
import FormInputTask from './FormInputTask'
import List from './List'
import Item from './Item'


function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <header>
        <h1>To Do List Exercise</h1>
      </header>
      <main>
        <FormInputTask>This is de form</FormInputTask>

      </main>
      <footer>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>

          <h3>Vite + React</h3>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </footer>
    </>

  )
}

export default App

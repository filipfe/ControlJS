import Control, { Controller } from "controljs"
import { useState } from "react"

export default function App() {
  const [mount, setMount] = useState(1)
  return (
    <div className="app">
      <h1>Testing ControlJS Library</h1>
      <button onClick={() => setMount(prev => prev + 1)}>ReMount</button>
      <div className="test">
        <Controller className="controller" opacity={1} stagger={200} onScroll={true} ease='ease-out'>
          <Control element={<p>Hello World</p>} x={-40} />
          <Control element={<p>Hello World</p>} />
          <Control element={<p>Hello World</p>} />
        </Controller>
      </div>
    </div>
  )
}
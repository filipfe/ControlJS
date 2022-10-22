import Control, { Controller } from "control"
import { useState } from "react"

export default function App() {
  const [mount, setMount] = useState(1)
  return (
    <div className="app">
      <h1>Testing ControlJS Library</h1>
      <button onClick={() => setMount(prev => prev + 1)}>ReMount</button>
      <div className="test">
        <Controller className="on-scroll" stagger={200} onScroll={true}>
          <Control element={<p>Hello World</p>} x={-40} ease='ease-out' mount={mount} opacity={1} />
          <Control element={<p>Hello World</p>} opacity={0.6} mount={mount} />
          <Control element={<p>Hello World</p>} x={40} ease='ease-out' mount={mount} opacity={1} />
        </Controller>
      </div>
    </div>
  )
}
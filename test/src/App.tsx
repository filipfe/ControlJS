import Control from "control"
import { useState } from "react"

export default function App() {
  const [mount, setMount] = useState(1)
  return (
    <div className="app">
      <h1>Testing ControlJS Library</h1>
      <button onClick={() => setMount(prev => prev + 1)}>ReMount</button>
      <Control element={<p>Hello World</p>} mount={mount} x={20} y={20} rotate={-50} ease='ease-out' opacity={1} />
    </div>
  )
}
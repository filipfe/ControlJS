import Control from "control"
import { useState } from "react"

export default function App() {
  const [mount, setMount] = useState(1)
  return (
    <div className="app">
      <h1>Testing ControlJS Library</h1>
      <button onClick={() => setMount(prev => prev + 1)}>ReMount</button>
      <div className="test">
        <Control element={<p>Hello World</p>} x={40} ease='ease-out' opacity={1} onScroll={true} />
      </div>  
    </div>
  )
}
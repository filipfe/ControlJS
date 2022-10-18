import Control from "control"

export default function App() {
  return (
    <>
      <h1>Testing ControlJS Library</h1>
      <Control element={<p>Hello World</p>} opacity={1} duration={600} delay={400} ease='ease-in' />
    </>
  )
}
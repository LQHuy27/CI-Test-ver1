import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { data1 } from './data'


function App() {
  const [data, setData] = useState([])  
  
  return (
    <>
      <h1>#todo</h1>
      <Nav data={data} setData={setData} />
    </>
  )
}

export default App

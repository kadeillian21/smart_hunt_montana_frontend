import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AntelopeTable } from './tables/AntelopeTable'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< AntelopeTable/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

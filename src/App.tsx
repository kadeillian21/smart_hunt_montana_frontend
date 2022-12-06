import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SpeciesTable } from './pages/SpeciesTable'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< SpeciesTable/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

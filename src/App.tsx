import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Charts } from './pages/Charts'
import { Home } from './pages/Home'
import { IndexTables } from './pages/IndexTables'
import { Login } from './pages/Login'
import { AntelopeTable } from './tables/AntelopeTable'
import { BlackBearTable } from './tables/BlackBearTable'
import { ElkTable } from './tables/ElkTable'
import { MooseTable } from './tables/MooseTable'
import { MountainGoatTable } from './tables/MountainGoatTable'
import { MountainLionTable } from './tables/MountainLionTable'
import { MuleDeerTable } from './tables/MuleDeerTable'
import { SheepTable } from './tables/SheepTable'
import { TurkeyTable } from './tables/TurkeyTable'
import { UplandGameTable } from './tables/UplandGameTable'
import { WhitetailDeerTable } from './tables/WhitetailDeerTable'
import { WolfTable } from './tables/WolfTable'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='mt-5 pt-2'>
      {localStorage.jwt === undefined ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={< Home/>} />
          {/* <Route path="/species" element={< IndexTables/>} /> */}
          <Route path="/charts" element={< Charts/>} />
          <Route path="/antelope" element={< AntelopeTable/>}/>
          <Route path="/black_bear" element={< BlackBearTable/>}/>
          <Route path="/elk" element={< ElkTable/>}/>
          <Route path="/moose" element={< MooseTable/>}/>
          <Route path="/mountain_goat" element={< MountainGoatTable/>}/>
          <Route path="/mountain_lion" element={< MountainLionTable/>}/>
          <Route path="/mule_deer" element={< MuleDeerTable/>}/>
          <Route path="/bighorn_sheep" element={< SheepTable/>}/>
          <Route path="/turkey" element={< TurkeyTable/>}/>
          <Route path="/upland_game" element={< UplandGameTable/>}/>
          <Route path="/whitetail_deer" element={< WhitetailDeerTable/>}/>
          <Route path="/wolf" element={< WolfTable/>}/>
        </Routes>
      )}

      </div>
    </BrowserRouter>
  )
}

export default App

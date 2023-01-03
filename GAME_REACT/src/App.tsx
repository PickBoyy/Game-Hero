import './App.css'
import Board from './components/Board'
import Demon from './components/Demon'
import MiniDemon from './components/Mini_Demon'
import { GAME_SIZE,TILE_SIZE } from './settings/consts'


function App() {
  return (
    <div className="App">
      <div style={{position:'relative', width: GAME_SIZE, height: GAME_SIZE,}}>

        <MiniDemon/>
        <Demon/>
        <Board/>
        </div>
    </div>
  )
}

export default App

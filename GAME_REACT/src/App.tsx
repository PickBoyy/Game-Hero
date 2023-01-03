import './App.css'
import Board from './components/Board'
import { GAME_SIZE,TILE_SIZE } from './settings/consts'


function App() {
  return (
    <div className="App">
      <div style={{
        position:'relative',
        width: GAME_SIZE,
        height: GAME_SIZE,

      }}>
        <Board/>
        </div>
    </div>
  )
}

export default App

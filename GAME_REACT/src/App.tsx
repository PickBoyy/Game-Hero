import './App.css'
import Board from './components/Board'
import Chest from './components/Chest'
import Demon from './components/Demon'
import MiniDemon from './components/Mini_Demon'
import Trap from './components/Trap'
import { GAME_SIZE} from './settings/consts'


function App() {
  return (
    <div className="App">
      <div style={{position:'relative', width: GAME_SIZE, height: GAME_SIZE,}}>
        <Chest/>
        <Trap/>
        <MiniDemon/>
        <Demon/>
        <Board/>
        </div>
    </div>
  )
}

export default App

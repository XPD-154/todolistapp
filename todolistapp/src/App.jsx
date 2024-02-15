import InlineComponent from './components/InlineComponent'
import OutlineComponent from './components/OutlineComponent'
import Todo from './components/Todo'
import './css/style.css'

function App() {

  return (
    <div className="App">
      <Todo/>
      <InlineComponent/>
      <OutlineComponent/>
    </div>
  )
  
}

export default App

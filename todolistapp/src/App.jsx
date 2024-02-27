import Header from './components/Header'
import Todo from './components/Todo'
import './css/style.css'
import './App.css'

function App() {

  return (
    <div className="App">
      
      {/*Header component referenced in App*/}
      <Header/>

      {/*Todo component referenced in App*/}
      <Todo/>

    </div>
  )
  
}

export default App

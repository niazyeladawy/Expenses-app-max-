
import './App.css'
import Expenses from './components/Expenses'

function App() {

  const expenses = [
    {
      id: "e1",
      title: "chair",
      price: 100,
      date: new Date(2022, 11, 24)
    },
    {
      id: "e2",
      title: "mice",
      price: 50,
      date: new Date(2021, 11, 24)
    }
    , {
      id: "e3",
      title: "keyboard",
      price: 30,
      date: new Date(2020, 1, 15)
    }
  ]

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App

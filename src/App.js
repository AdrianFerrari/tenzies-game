import './App.css';
import Dices from "./components/Dices.js"
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

function App() {
  const [tenzies, setTenzies] = useState(false)
  const [dices, setDices] = useState([...Array(10)].map((e, i) => {
    return {
      number: Math.floor(Math.random() * 10 + 1),
      id: i,
      frozen: false
    }
  }))

  useEffect(() => {
    const allFrozen = dices.every(e => e.frozen)
    const allSame = dices.every((e, i, array) => e.number === array[0].number)
    if(allFrozen && allSame) {
      console.log("you won")
      setTenzies(true)
    }
  }, [dices])

  
  function reRoll() {
    setDices(oldDices => oldDices.map(e => {
    return (
      e.frozen
      ? e
      : { ...e, number: Math.floor(Math.random() * 10 + 1) }
    )
    }))
  }

  function reset() {
    setDices(oldDices => oldDices.map(dice => {
      return {...dice, frozen: false}
    }))
    setTenzies(false)
    reRoll()
  }

  return (
    <main>
      {tenzies && <Confetti/>}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Dices  dices={dices} 
              setDices={setDices}
      />
      <button onClick={tenzies ? reset : reRoll}>{tenzies ? "Reset" : "Roll"}</button>
    </main>
  )
}

export default App;

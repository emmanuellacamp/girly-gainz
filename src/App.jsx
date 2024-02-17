import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [potion, setPotion] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout(){
    if (muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({potion, muscles, goal})

    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-pink-400 to-pink-900 text-white text-sm sm: text-base'>
      <Hero/>
      <Generator 
      potion={potion} 
      setPotion={setPotion}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App

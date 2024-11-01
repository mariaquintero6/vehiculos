import { useState } from 'react'
import './App.css'
import Cards from './componentes/Cards.jsx'
import vehicles from './data/vehicles.js'

function App() {
  const vehiclesList = vehicles.map( v => {
    return <Cards title={v.name} description={v.description} image={v.image}/>
  })

  return (
    <>
      <h1 className='titulo'>Manejo de componentes en react</h1>
      <div className="container">
        {vehiclesList}
      </div>
    </>
  )
}

export default App

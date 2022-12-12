import React, { useState } from 'react'
import { getDrones } from './services/droneService'
import { droneUpdater, calculateDistance } from './utils/helper'
import CurrentDrones from './components/CurrentDrones'
import NDZDrones from './components/NDZDrones'

// No control over the target API in order to socketize it --> the only way is to poll


const App = () => {
  const [drones, setDrones] = useState([])
  const [ndzDrones, setNdzDrones] = useState([])

  const fetchDrones = async () => {
    const date = Date.now()
    const tenMinutes = date + 600000  // 10 minutes in milliseconds
    const data = await getDrones()
    const parsed = new DOMParser().parseFromString(data, 'application/xml')
    const droneNodes = parsed.querySelectorAll('drone')
    const objs = Array.from(droneNodes).map(d => ({
      serialNumber: d.children[0].textContent,
      violating: calculateDistance(d.children[7].textContent, d.children[8].textContent) < 100000,
    }))
    setNdzDrones(droneUpdater(objs, tenMinutes, date, ndzDrones))
    setDrones(objs)
  }

  if (!drones && !ndzDrones) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <button onClick={fetchDrones}>get</button>
      <CurrentDrones drones={drones} />
      <NDZDrones ndzDrones={ndzDrones} />
    </div>
  )
}

export default App
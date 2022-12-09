import React, { useState } from 'react'
import { getDrones } from './services/droneService'

// No control over the target API in order to socketize it --> the only way is to poll


const App = () => {
  const [drones, setDrones] = useState([])

  const fetchDrones = async () => {
    const data = await getDrones()
    const parsed = new DOMParser().parseFromString(data, 'application/xml')
    const droneNodes = parsed.querySelectorAll('drone')
    const objs = Array.from(droneNodes).map(d => ({
      serialNumber: d.children[0].textContent,
      x: d.children[7].textContent,
      y: d.children[8].textContent
    }))
    setDrones(objs)
  }

  const calculateDistance = (drone) => {
    const res = Math.sqrt(Math.pow(250000 - drone.x, 2) + Math.pow(250000 - drone.y, 2))
    console.log(res)
    return res
  }

  // const ndzDrones = drones.filter(d => calculateDistance(d) > 1)


  if (!drones) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <button onClick={fetchDrones}>get</button>
      <h3>All drones</h3>
      <ul>
        {drones.map((d, i) =>
          <li key={i}>
            <div>{d.serialNumber}</div>
            <div>{d.x} --- {d.y}</div>
            {calculateDistance(d) <= 100000 ? <strong>violated</strong> : null}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import axios from 'axios'

// No control over the target API in order to socketize it --> the only way is to poll


const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(res => {
        const parsed = new DOMParser().parseFromString(res.data, 'application/xml')
        const drones = parsed.querySelectorAll('drone')
        setData(Array.from(drones))
      })
      .catch(error => console.log(error))
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <ul>
        {data.map((item, i) =>
          <li key={i}>
            <div>{item.children[0].textContent}</div>
            <div>{item.children[7].textContent} --- {item.children[8].textContent}</div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App

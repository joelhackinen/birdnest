import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import React, { useEffect } from 'react'
// import { XMLParser } from 'fast-xml-parser'

// No control over the target API in order to socketize it --> the only way is to poll

// const mock = '<?xml version="1.0" encoding="UTF-8"?><report><deviceInformation deviceId="GUARDB1RD"><listenRange>500000</listenRange><deviceStarted>2022-12-08T00:38:01.830Z</deviceStarted><uptimeSeconds>43743</uptimeSeconds><updateIntervalMs>2000</updateIntervalMs></deviceInformation><capture snapshotTimestamp="2022-12-08T12:47:04.766Z"><drone><serialNumber>SN-YqJluzI9g9</serialNumber><model>Altitude X</model><manufacturer>DroneGoat Inc</manufacturer><mac>98:21:92:1b:9d:a9</mac><ipv4>26.92.248.254</ipv4><ipv6>b41f:db08:a1e8:7d8c:a506:3b77:5d1a:faf6</ipv6><firmware>3.0.9</firmware><positionY>5890.5945584467845</positionY><positionX>319562.82925452845</positionX><altitude>4479.988872482581</altitude></drone></capture></report>'

const App = () => {
  const [poll, setPoll] = useState(true)
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(res => setData(res.data))
  }, [poll])

  setInterval(() => {
    setPoll(!poll)
  }, 2000)



  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {data}
    </div>
  )
}

export default App

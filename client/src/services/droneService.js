import axios from 'axios'

export const getPilot = async (serialNumber) => {
  const response = await axios.get(`http://localhost:4000/pilots/${serialNumber}`)
  return response.data
}

export const getDrones = async () => {
  const response = await axios.get('http://localhost:4000/drones')
  return response.data
}

export const droneUpdater = (drones, tenMinutes, date, ndzDrones) => {
  const newBadDrones = drones.filter(d => d.violating).map(d => ({ ...d, removalDate: tenMinutes }))
  const newBadDronesSerials = newBadDrones.map(d => d.serialNumber)
  const updatedBadDrones = ndzDrones.map(d => newBadDronesSerials.includes(d.serialNumber) ? { ...d, removalDate: tenMinutes } : d)
  const updatedBadDronesSerials = updatedBadDrones.map(d => d.serialNumber)
  const finalBadDrones = updatedBadDrones.concat(newBadDrones.filter(d => !updatedBadDronesSerials.includes(d.serialNumber)))
  return finalBadDrones.filter(d => d.removalDate >= date)
}

export const calculateDistance = (x, y) => {
  return Math.sqrt(Math.pow(250000 - x, 2) + Math.pow(250000 - y, 2))
}
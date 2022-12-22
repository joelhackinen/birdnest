export const droneUpdater = (drones, tenMinutes, date, ndzDrones) => {
  const newBadDrones = drones.filter(d => d.dist < 100000)
  const newBadDronesSerials = newBadDrones.map(d => d.sn)
  const updatedBadDrones = ndzDrones.map(d => newBadDronesSerials.includes(d.sn) ? { ...d, removalDate: tenMinutes } : d)
  const updatedBadDronesSerials = updatedBadDrones.map(d => d.sn)
  const finalBadDrones = updatedBadDrones.concat(newBadDrones.filter(d => !updatedBadDronesSerials.includes(d.sn)))
  return finalBadDrones.filter(d => d.removalDate >= date)
}

export const calculateDistance = (x, y) => {
  return Math.sqrt(Math.pow(250000 - x, 2) + Math.pow(250000 - y, 2))
}

export const findClosestDrone = (drones) => {
  if (drones.length === 0) {
    return null
  }
  return drones.reduce((p, c) => p.dist < c.dist ? p : c)
}
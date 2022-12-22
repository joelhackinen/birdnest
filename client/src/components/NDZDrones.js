import React from 'react'
import PropTypes from 'prop-types'

const NDZDrones = ({ drones, date }) => {
  return (
    <div>
      <h3>Violating drones in the last 10 minutes</h3>
      <ul>
        {drones.map(d =>
          <li key={d.sn}>
            <div>{d.sn}</div>
            <div>removal in: {(d.removalDate - date) / 60000} minutes</div>
          </li>
        )}
      </ul>
    </div>
  )
}

NDZDrones.propTypes = {
  drones: PropTypes.array.isRequired,
  date: PropTypes.number.isRequired
}

export default NDZDrones
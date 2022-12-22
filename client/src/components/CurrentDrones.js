import React from 'react'
import PropTypes from 'prop-types'

const CurrentDrones = ({ drones }) => {
  return (
    <div>
      <h3>All drones</h3>
      <ul>
        {drones.map(d =>
          <li key={d.sn}>
            {d.sn} {d.dist < 100000 ? <strong>now violating</strong> : null}
          </li>
        )}
      </ul>
    </div>
  )
}

CurrentDrones.propTypes = {
  drones: PropTypes.array.isRequired
}

export default CurrentDrones
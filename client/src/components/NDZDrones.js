import React from 'react'
import PropTypes from 'prop-types'

const NDZDrones = ({ ndzDrones }) => {
  return (
    <div>
      <h3>NDZ drones in the last 10 minutes</h3>
      <ul>
        {ndzDrones.map((d, i) =>
          <li key={i}>
            <div>{d.serialNumber}</div>
            <div>removal on: {d.removalDate}</div>
          </li>
        )}
      </ul>
    </div>
  )
}

NDZDrones.propTypes = {
  ndzDrones: PropTypes.array.isRequired
}

export default NDZDrones
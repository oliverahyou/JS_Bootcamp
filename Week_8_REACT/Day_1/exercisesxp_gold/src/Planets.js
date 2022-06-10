import React from 'react';

const Planets = (props) => {
  const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];
  return (
    <div> 
      {
        planets.map((user, i) => {
          return <li className="list-group-item">{planets[i]}</li>
        })
      }
    </div>
  )
}

export default Planets;
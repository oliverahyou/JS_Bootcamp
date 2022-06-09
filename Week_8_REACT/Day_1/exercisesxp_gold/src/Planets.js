import React from 'react';

const Planets = () => {
    const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];
  return (
    <div>
        <ul class="list-group">
          <li class="list-group-item">{planets[0]}</li>
          <li class="list-group-item">{planets[1]}</li>
          <li class="list-group-item">{planets[2]}</li>
          <li class="list-group-item">{planets[3]}</li>
          <li class="list-group-item">{planets[4]}</li>
          <li class="list-group-item">{planets[5]}</li>
          <li class="list-group-item">{planets[6]}</li>
        </ul>
    </div>
  )
}

export default Planets;
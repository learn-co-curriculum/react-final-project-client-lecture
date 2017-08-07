import React from 'react';
import { Link } from 'react-router-dom'

const SurfboardCard = ({ match, surfboard }) => (
  <Link to={`${match.url}/${surfboard.id}`}>
    <div key={surfboard.id} className="SurfboardCard">
      <h3>{surfboard.name}</h3>
      <p>Price: ${surfboard.price}</p>
      <img className="SurfboardImage" src={surfboard.img_url} alt={surfboard.name} />
      <p>Length: {surfboard.length} inches</p>
    </div>
  </Link>
)

export default SurfboardCard;
import React from 'react';

const SurfboardCard = ({ surfboard }) => (
  <div key={surfboard.id} className="SurfboardCard">
    <h3>{surfboard.name}</h3>
    <p>Price: ${surfboard.price}</p>
    <img className="SurfboardImage" src={surfboard.img_url} alt={surfboard.name} />
    <p>Length: {surfboard.length} inches</p>
  </div>
)

export default SurfboardCard;
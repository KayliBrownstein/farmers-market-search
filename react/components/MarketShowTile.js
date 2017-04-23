import React from 'react';

const MarketShowTile = (props) => {
  return(
    <div>
      <h3>{props.marketname}</h3>
      <p><strong>Address:</strong> {props.address}</p>
      <a href={props.googleLink}>Google Maps</a>
      <p><strong>Products:</strong> {props.products}</p>
      <p><strong>Schedule:</strong> {props.schedule}</p>
    </div>
  )
}

export default MarketShowTile;

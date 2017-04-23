import React from 'react';
import { Link } from 'react-router';

const ResultTile = (props) => {
  return(
    <div className="resultTiles">
      <p><Link to={`/${props.id}`}> {props.marketname} </Link></p>
    </div>
  )
}

export default ResultTile;

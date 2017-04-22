import React, { Component } from 'react';
import ResultTile from './ResultTile';

const ResultsContainer = (props) => {
  let attributes = props.attributes.map(attribute => {
    return(
      <ResultTile
        key={attribute.id}
        id={attribute.id}
        marketname={attribute.marketname}
      />
    )
  })

  return(
    <div className='searchResults'>
      <h2 className= {props.className}>Markets Near {props.place}</h2>
      <div id='colorStrip' />

      <div className="row">
        {attributes}
      </div>
    </div>
  )
}

export default ResultsContainer;

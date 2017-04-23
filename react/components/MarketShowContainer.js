import React, { Component } from 'react';
import MarketShowTile from './MarketShowTile';

class MarketShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      market: {}
    }
  }

  componentDidMount(){
    this.getMarketData();
  }

  getMarketData(){
    let marketID = this.props.params.id;
    fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${marketID}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ market: responseData.marketdetails })
        console.log(this.state.market)
      })
  }

  render(){
    return(
      <div>
        <MarketShowTile
          key={this.props.params.id}
          id={this.props.params.id}
          address={this.state.market.Address}
          googleLink={this.state.market.GoogleLink}
          products={this.state.market.Products}
          schedule={this.state.market.Schedule}
        />
      </div>
    )
  }
}

export default MarketShowContainer;

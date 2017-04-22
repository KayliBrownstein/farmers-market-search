import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      attributes: [],
      zip: '',
      place: '',
      resultsToggle: false,
      errors: {},
      header: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleHeader = this.handleHeader.bind(this);
  }

  validateZipChange(zip) {
    if (zip === '' || zip === ' ') {
      let newError = { zip: 'Zip should not be blank' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else if ( !zip.match(/^\d{5}$/)) {
      let newError = { zip: 'Zip should be 5 numbers' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.zip;
      this.setState({ errors: errorState });
      return true;
    }
  }
  handleHeader(event) {
    if (this.state.resultsToggle === false) {
      this.setState({
        resultsToggle: true
      })
    } else {
      this.setState({
        resultsToggle: false
      })
    }
  }

  handleSearchChange(event){
    this.setState({ attributes: [] });
    this.setState({ zip: event.target.value });
    this.setState({ place: event.target.value });
    this.setState({resultsToggle: false });
  }

  handleClearForm(event){
    this.setState({ zip: '' })
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    this.validateZipChange(this.state.zip);
    fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${this.state.zip}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ attributes : responseData.results });
      this.handleClearForm();
      this.handleHeader();
    })
  }


  render() {
    let className;
    if (this.state.resultsToggle) {
      className = 'selected'
    } else {
      className = 'hidden'
    };

    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      });
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div>
        <h1>Say No to GMO!</h1>
        {errorDiv}
        <div className='searchbarContainer row'>
          <SearchBar
            onChange={this.handleSearchChange}
            zip={this.state.zip}
            onSubmit={this.handleSearchSubmit}
          />
        </div>

        <div className='resultsContainer'>
          <ResultsContainer
            className = {className}
            attributes={this.state.attributes}
            place={this.state.place}
          />
        </div>
      </div>
    )
  }
}

export default App;

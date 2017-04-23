import ReactDOM from 'react-dom';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import ResultsContainer from './components/ResultsContainer';
import MarketShowContainer from './components/MarketShowContainer';



render((
  <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/:id' component={MarketShowContainer} />
  </Router>
), document.getElementById('app'));

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './componets/layout/Navbar';
import Index from './componets/layout/Index';
import {Provider} from './context';

import './App.css';

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;

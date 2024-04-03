// In your App.js or a separate routing file
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ImageDisplay from './src/ImageDisplay'; 
import AnotherPage from './App.jsx'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ImageDisplay.jsx" exact component={ImageDisplay} />
        <Route path="/App.jsx" component={AnotherPage} />
      </Switch>
    </Router>
  );
}

export default App;

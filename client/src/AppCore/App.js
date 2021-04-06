import './App.css';

import List from '../components/Searchbar/Searchbar';
import Event from '../components/Event/Event';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Research from '../pages/Research';
import About from '../pages/About';

function App() { 
  return (
      <div >
      <Router>
        <Event />
      </Router>
      </div>
  );
}

export default App;

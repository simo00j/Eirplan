import './App.css';

import List from '../components/Searchbar/Searchbar';
import Plan from '../components/Plan/Plan';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Research from '../pages/Research';
import About from '../pages/About';

function App() { 
  return (
      <div >
      <Router>
        <Plan />
      </Router>
      </div>
  );
}

export default App;

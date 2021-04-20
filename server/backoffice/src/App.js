import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import { PrivateRoute } from "./components/PrivateRoute.js";
import{Event} from "./components/Event";
import{EventId} from "./components/EventId";



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Add} />
            <PrivateRoute path="/Home" component={Home} />
            <Route exact path="/event" component={Event}/>

          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
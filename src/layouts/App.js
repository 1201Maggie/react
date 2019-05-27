import React,{Component} from "react";

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import BuyCar from "../pages/BuyCar";
import Classify from "../pages/Classify";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
// import Error from "../pages/Error";
import Discover from "../pages/Discover";
import List from "../pages/List";
import AuthRoute from "../guard/Auth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/BuyCar" component={BuyCar}/>
          <Route path="/Classify" component={Classify}/>
          <AuthRoute path="/User" component={User}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Reg" component={Reg}/>
          <Route path="/Discover" component={Discover}/>
          <Route path="/List/" component={List}/>
          <Redirect exact from="/" to="/Home"/>
          {/* <Route component={Error}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
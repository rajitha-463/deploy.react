import React,{Component} from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Data from './Data';
import ProductList from "./ProductList";
import Details from './Details';


class App extends Component {
  render() {
    return (
      <React.Fragment>
       
        <Switch>
          <Route exact path="/" component={Data} />
          <Route path="/details" component={Details} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
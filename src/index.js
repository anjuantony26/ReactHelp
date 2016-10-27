import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router , Route, browserHistory} from 'react-router'
import {GooglePie} from './googlePie.js'
export class HelloWorld extends React.Component {
  render(){
    console.log("Asdkjlahslkjdgklj")
    return (
      <div> Hello World 123123123123123</div>
    )
  }
}
class Name extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : ""
    }
  }
  render(){
    return (
      <div>
        <input value={this.state.name} onChange={e => this.setState({ name : e.target.value})} />
        {this.state.name}
      </div>
    )
  }
}
let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/hello" component={HelloWorld}/>
      <Route path="/name" component={Name}/>
      <Route path="Pie" component={GooglePie}/>
    </Route>

  </Router>
)
ReactDOM.render(
  routes,
  document.getElementById('root')
);

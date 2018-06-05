import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderDiv from './HeaderDiv' ;
import SignUp from './SignUp' ;
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {

constructor(props){
  super(props)


}

componentDidMount(){


}


  render() {



    return (
      <Router>
            <Switch>
                <Route path='/playstore' component={() => window.location = 'https://play.google.com/store/apps/details?id=com.trello'}/>
                <Route path='/itunes' component={() => window.location = 'https://itunes.apple.com/app/trello-organize-anything/id461504587'}/>
                <Route path='/signUp' component={SignUp}/>
                <Route path='/' component={HeaderDiv}/>
            </Switch>
      </Router>
    );
  }
}

export default App;

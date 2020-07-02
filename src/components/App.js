import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import createLink from './Link/CreateLink';
import Login from './Auth/Login'
import ForgotPassword from './Auth/ForgotPassword'
import SearchLinks from './Link/SearchLinks'
import LinkList from './Link/LinkList'
import LinkDetail from './Link/LinkDetail'
import Header from './Header'

function App() {
  return (
    <Router>
      <div className="app-container">
      <Header/>
      <div className="route-container">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/new/1"/>}/>
        <Route path ="/create" component={createLink}/>
        <Route path ="/login" component={Login}/>
        <Route path ="/forgot" component={ForgotPassword}/>
        <Route path ="/search" component={SearchLinks}/>
        <Route path ="/top" component={LinkList}/>
        <Route path ="/new/:page" component={LinkList}/>
        <Route path ="/link/:linkId" component={LinkDetail}/>
        <Route path ="/new/:page" component={LinkList}/>
      </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// Pages
import { HomePage } from 'Pages/home.page';
import { AnotherPage } from 'Pages/another.page';
import { AddPage } from 'Pages/add.page';
import { DetailPage } from 'Pages/detail.page';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="menu">
            <li><NavLink exact to="/" activeClassName="active">Home Page</NavLink></li>
            <li><NavLink to="/another" activeClassName="active">Another Page</NavLink></li>
            <li><NavLink to="/add" activeClassName="active">Add Page</NavLink></li>
            <li><NavLink to="/detail" activeClassName="active">Detail Page</NavLink></li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/another" component={AnotherPage} />
            <Route exact path="/add" component={AddPage} />
            <Route exact path="/detail" component={DetailPage} />
            <Route path="/detail/:id" component={DetailPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
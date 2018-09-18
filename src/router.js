import React from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import HomepageSmart from './homepage-smart';
import Profile from './profile';
import About from './about';


let NavBar = () => 
    <nav>
        <NavLink to="/homepage">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </nav>

let NotFound = () => <h1>404 Not Found</h1>

let Router = () => 
    <HashRouter>
        <div>
            <NavBar />
            <Switch>
                <Route path="/homepage" component={HomepageSmart}/>
                <Route path="/about" component={Profile}/>
                <Route path="/profile" component={About}/>
                <Route path="/" component={NotFound}/>
            </Switch>    
        </div>
    </HashRouter>

export default Router;
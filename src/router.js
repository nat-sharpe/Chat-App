import React from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Profile from './profile';
import About from './about';
import Homepage from './homepage';
import WassupPage from './wassup-page';

let NavBar = () => 
    <nav>
        <NavLink to="/homepage">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </nav>

let NotFound = () => <h1>404 Not Found</h1>

let Router = (props) =>
    <HashRouter>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/homepage" render={routeProps =>
                    <Homepage {...routeProps} {...props} /> 
                    } 
                />
                <Route exact path="/wassup/:id" render={routeProps =>
                    <WassupPage {...routeProps} {...props} /> 
                    } 
                />
                <Route path="/about" render={About}/>
                <Route path="/profile" render={Profile}/>
                <Route path="/" render={NotFound}/>
            </Switch>    
        </div>
    </HashRouter>

export default Router;
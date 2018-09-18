import React from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Profile from './profile';
import About from './about';
import Homepage from './homepage';

let NavBar = () => 
    <nav>
        <NavLink to="/homepage">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </nav>

let WassupPage = (props) => {
    let clickedWassup = props.posts.find(post => (post.id.toString() === props.match.params.id))
    return clickedWassup ? <h3>{ clickedWassup.content }</h3> : <h3>Loading</h3>
}

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
                <Route path="/about" render={Profile}/>
                <Route path="/profile" render={About}/>
                <Route path="/" render={NotFound}/>
            </Switch>    
        </div>
    </HashRouter>

export default Router;
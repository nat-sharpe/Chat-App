import React, { Component } from 'react';
import WassupForm from './WassupForm';

// Takes user input and sends data to HomepageContainer
class WassFormSmart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: '',
            user: '',
        }
    }
    render () {
        let changeWassupState = event => this.setState({newWassup: event.target.value});
        let changeUserState = event => this.setState({user: event.target.value});
        let submitHandler = event => {
            event.preventDefault();
            if (this.state.newWassup && this.state.user) {
                let newPost = {
                    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
,
                    user: this.state.user,
                    userId: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
,
                    content: this.state.newWassup
                }
                this.props.makeWassup(newPost);
                this.setState({
                    newWassup: ''
                });
            }
        }
        return < WassupForm makeWassup={this.props.makeWassup} newWassup={this.state.newWassup} user={this.state.user} changeWassupState={changeWassupState} changeUserState={changeUserState} submitHandler={submitHandler} />
    }
}

export default WassFormSmart;

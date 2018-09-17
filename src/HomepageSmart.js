import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';

// Builds page and keeps track of state
class HomepageSmart extends Component {
  constructor(props) {
      super(props);
      this.state = {
          posts: []
      }
  };

  componentDidMount() {
      fetch('http://0.tcp.ngrok.io:11971/wassups.json')
          .then(response => response.json())
          .then(oldPosts => 
              this.setState({
                  posts: oldPosts
              })
          )
      };

  render() {
      let makeWassup = newWassup => {
          this.setState({
              posts: [newWassup, ...this.state.posts]
          })
      };
      return < Homepage posts={this.state.posts} makeWassup={makeWassup} />
  };
};

export default HomepageSmart;
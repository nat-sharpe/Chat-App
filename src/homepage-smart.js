import React, { Component } from 'react';
import Router from './router';
import { connect } from 'react-redux';

class HomepageSmart extends Component {
  constructor(props) {
      super(props);
      this.state = {
          posts: []
      }
  };

  componentDidMount() {
      fetch('http://0.tcp.ngrok.io:17762/wassups.json')
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
      return < Router posts={this.state.posts} makeWassup={makeWassup} />
  };
};

export default HomepageSmart;

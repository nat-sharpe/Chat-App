import React from 'react';

let WassupPage = (props) => {
    let clickedWassup = props.posts.find(post => (post.id.toString() === props.match.params.id))
    return clickedWassup ? <h3>{ clickedWassup.content }</h3> : <h3>Loading</h3>
}

export default WassupPage;

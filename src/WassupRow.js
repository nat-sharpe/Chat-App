import React from 'react';

// Builds each post
let WassupRow = props => (
    <li>
        <h3>{ props.post.content }</h3>
        <p>{ props.post.user + ' user# ' + props.post.userId }</p>
    </li>
);

export default WassupRow;

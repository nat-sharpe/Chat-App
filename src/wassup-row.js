import React from 'react';
import {Link} from 'react-router-dom';

// Builds each post
let WassupRow = props => (
    <Link to={ `/wassup/${props.post.id}` }>
        <li>
            <h3>{ props.post.content }</h3>
            <p>{ props.post.user + ' user# ' + props.post.userId }</p>
        </li>
    </Link>
);

export default WassupRow;

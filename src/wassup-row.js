import React from 'react';
import {Link} from 'react-router-dom';

// Builds each post
let WassupRow = props => (
        <li>
            <Link to={ `/wassup/${props.post.id}` }>
                <h3>{ props.post.content }</h3>
            </Link>
            <p>{ 'posted by ' + props.post.user + ' (user #' + props.post.userId + ')'}</p>
            <button>DELETE</button>
        </li>
);

export default WassupRow;

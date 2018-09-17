import React from 'react';
import WassupRow from './WassupRow';
// Holds all old and new posts
let WassupList = props => (
    <ul>
        { props.posts.map(post => 
            <WassupRow 
                post={post}
                key={post.id}
            />
        )}
    </ul>
);

export default WassupList;

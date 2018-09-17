import React from 'react';
import WassupFormSmart from './WassupFormSmart';
import WassupList from './WassupList';

let Homepage = props => (
    <main>
        <h1>Wasssup?</h1>
        <WassupFormSmart posts={props.posts} makeWassup={props.makeWassup} />
        <WassupList posts={props.posts} />
        <footer>Copyright 2018</footer>
    </main>
);

export default Homepage;

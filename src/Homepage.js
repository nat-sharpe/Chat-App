import React from 'react';
import WassupFormSmart from './wassup-form-smart';
import WassupList from './wassup-list';

let Homepage = props => (
    <main>
        <h1>Wasssup?</h1>
        <WassupFormSmart posts={props.posts} makeWassup={props.makeWassup} />
        <WassupList posts={props.posts} />
        <footer>Copyright 2018</footer>
    </main>
);

export default Homepage;

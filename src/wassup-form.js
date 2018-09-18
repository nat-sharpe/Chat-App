import React from 'react';

let WassupForm = props => (
    <form
        onSubmit={
            props.submitHandler
        }>
        <input
            type="text"
            value={props.newWassup}
            placeholder="What's up?"
            onChange={
                props.changeWassupState
            }
        />
        <input 
            type="text"
            value={props.user}
            placeholder="What's your name?"
            onChange={
                props.changeUserState
            }
        />
        <input type="submit" value="Go"/>
    </form>
);

export default WassupForm;

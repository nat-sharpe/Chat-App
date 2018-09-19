import {createStore} from 'redux';

let state = {
    posts: [],
    newWassup: '',
    user: ''
};

let reducer = () => {

};

let store = createStore(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store

let app =
  <Provider store={store}>
    <Router />
  </Provider>
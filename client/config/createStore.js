import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      // This line simply enables the redux dev-tools chrome extension for our app
      process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}

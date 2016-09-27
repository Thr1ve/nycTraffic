import React from 'react';
import { Provider } from 'react-redux';

import App from './App';

const Root = React.createClass({
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});

export default Root;

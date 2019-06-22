import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@testing-library/react/cleanup-after-each'; // keeps the test from adding a new app everytime - cleans up the tests

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



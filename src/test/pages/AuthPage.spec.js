import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../../store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

describe('<AuthPage />', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(getByText(/sign up/i));
    const formTitle = getByTestId(/form-title/);
    expect(formTitle.textContent).toBe('Sign up');
  });
});

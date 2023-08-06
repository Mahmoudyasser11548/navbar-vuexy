import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App.jsx";
import { Provider } from 'react-redux'
import { store } from "./redux/store.js"
import { BrowserRouter } from 'react-router-dom'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  ),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

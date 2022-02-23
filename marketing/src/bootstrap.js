import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const devRoot = document.querySelector('#_marketing-dev-root');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const IS_ISOLATED = Boolean(devRoot);

// Mount function to start up the app
const history = IS_ISOLATED ? createBrowserHistory() : createMemoryHistory();

// @todo: clean up, can we move this somewhere else or make it better
let unlisten;
const mount = ({ onNavigate }) => {

  console.log("Mounting Marketing app");

  if (unlisten !== undefined) {
    unlisten();
  }
  unlisten = history.listen(({action, location}) => {
    console.log("let the container know, navigation occured!");
    onNavigate({action, location});
  });

  return {
    render (el) {
      ReactDOM.render(
        <App history={history}/>,
        el
      );
    },
    onParentNavigate({ pathname: nextPathName }) {
      history.push(nextPathName);
    }
  }
}

// If we are in development and in isolation,
// call mount immediately
if (IS_DEVELOPMENT) {

  if(IS_ISOLATED) {
    const { render } = mount({
      onNavigate: () => {}
    });

    render(devRoot);
  }
}


// We are running through container
// and we should export the mount function
export { mount };

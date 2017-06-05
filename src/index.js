import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import registerServiceWorker from 'registerServiceWorker';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('containers/Root', () => {
    render(Root);
  });
}

// Enable working the app in offline
registerServiceWorker();

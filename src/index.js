import React from 'react';
import ReactDOM from 'react-dom';

// Create new component that should produce some HTML.

const App = function () {
  return <div>Hi</div>;
}


// Take this compnent's HTML and put it on the page.

ReactDOM.render(<App/>, document.querySelector('.container'));

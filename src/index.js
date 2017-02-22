import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBwgKt3HJy7fYT9QpxFt1wD07OJuzWMhVU';

// Create new component that should produce some HTML.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};


// Take this compnent's HTML and put it on the page.

ReactDOM.render(<App/>, document.querySelector('.container'));

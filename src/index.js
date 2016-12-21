import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDtdYbGX05OV54qkhzfQ_g22IaU2nDni8o';

// Create a new component - this component produces HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this compnent's generated HTML & put it on page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


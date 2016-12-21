import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component - this component produces HTML

const App = () => {
  return <div>Hi!</div>;
}


// Take this compnent's generated HTML & put it on page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


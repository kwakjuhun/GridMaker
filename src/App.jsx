import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index.js';
import GlobalStyle from './css/GlobalStyle.js';
const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Index></Index>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
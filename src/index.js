import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UpdatedApp from './UpdatedApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <UpdatedApp/>
  </React.StrictMode>
);

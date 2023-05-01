import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [storage, setStorage] = React.useState()

const storageContext = React.createContext([storage, setStorage])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <storageContext.Provider>
      <App />
   </storageContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


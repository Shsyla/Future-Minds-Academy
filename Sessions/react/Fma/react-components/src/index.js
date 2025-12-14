import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import FullName from './components/FullName';
import UserInformation from './components/UserInformation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <FullName firstName="Shkurte" lastName="Syla" />
    <UserInformation
      firstName="Shkurte"
      lastName="Syla"
      age={31}
      gender="female"
      createdAr = "2025"
      role ="admin"
      birthYear ="28/03/1994"
    />
  </React.StrictMode>
);

reportWebVitals();

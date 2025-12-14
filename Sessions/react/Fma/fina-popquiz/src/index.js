import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
import Q3 from './pages/Q3';
import Q4 from './pages/Q4';
import Q5 from './pages/Q5';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {path: "/", element: <Q1 />},
  {path: "/q2", element: <Q2 />},
  {path: "/q3", element: <Q3 />},
  {path: "/q4", element: <Q4 />},
  {path: "/q5", element: <Q5 />}
]);

root.render(
  <React.StrictMode>
    <RouterProvider 
      router = {router}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

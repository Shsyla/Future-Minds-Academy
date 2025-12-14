import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds=>prevSeconds + 1);
     }, 1000);
      return()=>clearInterval(interval);
  }, []);

 
  return (
    <>
      <p>Seconds: {seconds}</p>
    </>
  );
}

export default App;

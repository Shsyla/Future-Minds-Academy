import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => count < 10 && setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  const [isVisible, setIsVisible] = useState(true);
  const toggle = () => setIsVisible(!isVisible);

  const [inputValue, setinputValue] = useState('');
  const handleInputChange = (e) => setinputValue(e.target.value);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <>
      <h1>Counting</h1>
      <hr />
      <div className="wrapper">
        <button onClick={decrement}>-</button>
        <h2 id="results">{count}</h2>
        <button onClick={increment}>+</button>
      </div>

      <h1>Toggle</h1>
      <hr />
      <button onClick={toggle}>Click</button>
      {isVisible && <p>This is a Toggled text.</p>}

      <h1>Input Field</h1>
      <hr />
      <input id="textType" type="text" value={inputValue} onChange={handleInputChange} />
      <p>You typed:{inputValue} </p>

      <h1>Form</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phne}
          onChange={handleChange}
          placeholder="+383.44.123.123"
        />
        <button type="submit">Submit</button>
      </form>

    </>
  );
}

export default App;

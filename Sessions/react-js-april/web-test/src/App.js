import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("");
  const [hover, setHover] = useState(false);
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${fullName}`);
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        setTime(prev => prev + 1);
      }
      , 1000);
    return () => clearInterval(interval);
  },
    [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h1>{time}</h1>

      <hr />

      <select onChange={(s) => setColor(s.target.value)}>
        <option value="">Choose</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
      <p>{color}</p>

      <hr />

      <div
        style={{ color: hover ? "red" : "black" }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}>
        Future Minds Academy!
      </div>

      <hr />

      <div style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh"
      }}>
        <button onClick={
          () => setDark(!dark)
        }>
          Toggle Theme
        </button>
      </div>

      <hr />

      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow(!show)}>Show</button>

    </>

  );
}


export default App;
import React from 'react'

const Clickme = () => {

  const handleClick = () => {
     alert("Me Klikove");
  }
  return (
<>
<button onClick={handleClick}>Click Me</button>
</>
  );
}

export default Clickme

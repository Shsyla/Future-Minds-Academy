import React, { useState } from 'react';

const Toggle = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <p>Hello FMA</p>}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default Toggle;

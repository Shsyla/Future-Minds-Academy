// import React, { useState } from 'react'

// const App = () => {
//   const [isRed, setIsRed] = useState(false)

//   const toggleColor = () => {
//     setIsRed(!isRed)
//   }

//   // Ternary operator
//   // ? (if) : (else)

//   return (
//     <div>
//       <h1 style={{color: isRed ? "red" : "black"}}>Change my color</h1>
//       <button onClick={toggleColor}>Click me</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }

  const decrease = () => {
    setNumber(number - 1)
  }

  const reset = () => {
    setNumber(0)
  }

  return (
    <div>
      <h1>Change the Number</h1>
      <h2>{number}</h2>

      <button onClick={decrease}>- Decrease</button>
      <br />
      <button onClick={increase}>+ Increase</button>
       <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(prev => prev + 1)
//   }

//   const decrement = () => {
//     setCount(prev => prev - 1)
//   }

//   const reset = () => {
//     setCount(0)
//   }

//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App

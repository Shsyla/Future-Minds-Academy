import React from 'react'

import Clickme from './components/Clickme'
import Change from './components/Change'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import Additem from './components/Additem'

const App = () => {
  return (
    <div>
      <h1>Click me</h1>
      <Clickme />
      <hr />
      <Change />
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <Additem />
    </div>
  )
}

export default App

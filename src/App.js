import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Forms1 from './components/forms1'

import About from './components/about'
let App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar /> 
      <Route exact path="/" component={Forms1} />
      <Route path="/about" component={About}/> 
      </BrowserRouter>
    </div>
  )
}

export default App

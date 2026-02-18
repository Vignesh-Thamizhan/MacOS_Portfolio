import React from 'react'
import { Dock, Navbar, Welcome, Windows } from './components'

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      
      <Dock />
    </main>
  )
}

export default App;
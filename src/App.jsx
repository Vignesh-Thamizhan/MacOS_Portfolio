import React from 'react'
import gsap from 'gsap';
gsap.registerPlugin(Draggable);

import { Draggable } from 'gsap/all';
import { Dock, Navbar, Welcome, Windows } from './components';
import { Terminal } from './windows';


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  )
}

export default App;
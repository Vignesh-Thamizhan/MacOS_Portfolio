import React from 'react'
import gsap from 'gsap';
gsap.registerPlugin(Draggable);

import { Draggable } from 'gsap/all';
import { Dock, Navbar, Welcome, Windows } from './components';
import { Terminal, Safari, Resume } from './windows';


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>
  )
}

export default App;
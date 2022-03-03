import React, { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import Escenes from './Escena';
import banana from './banana.jpg'
import mango from './mango.jpg'
import orange from './orange.jpg'
import watermelon from './watermelon.jpg'


function App() {

  const escenes = [
    {
      fruit: 'Banana',
      img: banana
    },
    {
      fruit: 'Mango',
      img: mango
    },
    {
      fruit: 'Orange',
      img: orange
    },
    {
      fruit: 'Watermelon',
      img: watermelon
    }]
  const [selection, setSelection] = useState(0)

  // const selectPrevious = (selection) => {

  //   selection > 0 ? selection-- : selection
  // }


  return (
    <div className="App" style={{
      backgroundImage: `url(${escenes[selection].img})`,
      backgroundSize: '100%'
    }}>
      <Buttons onClick={setSelection} selected={selection} />
      <Escenes escenes={escenes} selected={selection} />
    </div >
  );
}

export default App;

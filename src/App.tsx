import React from 'react';
import './App.css';

export function App() {
  return (
    <div>
      <div>Name App / header</div>
      <Accordion/>
      <Raiting/>
    </div>
  );
}

let Accordion = () => {
  return(<div>
    <h3>Menu</h3>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
      </ul>
  </div>)
}

let Raiting = () => {
    return (<div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>)
}

let Star = () => {
    return (<div>
        star
    </div>)
}
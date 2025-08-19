import React from 'react';
import './App.css';

let name: string; //strings
let age: number | string; //union, age can be a num or string
name = 'Rahman';
age = 23;
let hobbies: string[]; //string array
let job: [number, string]; //tuple - contains one num and one string value

type Person = {
  name: string;
  age?: number; //optional
  job?: [number, string]; //optional
}

let deliClerk: Person = {
  name: "Steven",
}



function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

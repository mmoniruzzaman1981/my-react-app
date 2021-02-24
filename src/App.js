import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>My First React, I am a React Person</p>
      <Person name = 'Abir' job = 'football' ></Person>
      <Person name = 'Kabir' job = 'tenis' ></Person>
      <Person name = 'Jabir' job = 'Badminton' ></Person>
      </header>
    </div>
  );
}

function Person(props){
  return (
    <div style= {{border: '2px solid gold', width: '400px', margin: '10px'}} >
      <h3>My Name: {props.name} </h3>
      <p>My Profession: {props.job} </p>
    </div>
  )
}

export default App;

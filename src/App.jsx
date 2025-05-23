import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Data array
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// List Component (Arrow function + concise callback)
const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span><a href={item.url}>{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

// Search Component (Arrow function with handler)
const Search = () => {
  const handleChange = (event) => {
    console.log(event);               // Synthetic event
    console.log(event.target.value);  // Input value
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text" 
        onChange={handleChange}  // Fixed syntax: removed parentheses
      />
    </div>
  );
};

// App Component (Arrow function)
const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
  </div>
);

export default App;
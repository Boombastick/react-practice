import { useState } from 'react'
import reactLogo from './assets/react.svg'
import photo from './assets/짱구.png'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}

function BoomButton() {
  const [boom, setBoom] = useState(0)
  
  function handleClick() {
    setBoom(boom + 1);
  }

  return (
    <button onClick={handleClick}>
      Boom! {boom} times
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  const user = {
    name: 'zzz',
    imageUrl : photo,
    imageSize : 90,
  };

  const products = [
    { title: 'Cabbage', isFurit: false, id: 1 },
    { title: 'Garlic', isFurit: false, id: 2 },
    { title: 'Apple', isFurit: true, id: 3 },
  ]

  const listItems = products.map(product =>
    <li 
      key={product.id}
      style={{
        color: product.isFurit ? 'magenta' : 'darkgreen'
      }}  
    >
      {product.title}
    </li>
  );

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <MyButton />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr/>
      <h1>{user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <hr/>
      <ul>{listItems}</ul>
      <hr/>
      <MyButton/>
      <hr/>
      <BoomButton/>
    </>
  )
}

export default App

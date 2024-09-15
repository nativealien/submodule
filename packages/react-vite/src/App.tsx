import './App.css'

function App() {

  return <div className="app">
    <h1>Submodule example - React | TS | express</h1>
    <button onClick={() => {
      fetch("http://localhost:3001/", {})
        .then(res => res.json())
        .then(data => console.log(data))
    }}>GET SOME DATA12</button>
  </div>
}

export default App

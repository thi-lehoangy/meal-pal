import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = "typeform.html";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Weekly meal plans curated just for you.
        </p>
        <div>
          <button type="button" class = "button" onClick = {handleClick}> <h4 class = "button-font">GET STARTED</h4></button>
        </div>
      </header>
    </div>
  );
}



export default App;

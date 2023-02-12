import logo from './logo.svg';
import './App.css';
import PlannerCell from './components/PlannerCell';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Forms/>
      <header className="App-header">
        <PlannerCell />
      </header>
    </div>
  );
}

export default App;

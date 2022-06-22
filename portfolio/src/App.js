
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Container from './components/Container/Container';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <canvas className='main'>
        <Container/>
      </canvas>
    </div>
  );
}

export default App;

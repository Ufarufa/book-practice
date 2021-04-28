import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <Todos></Todos>
    </div>
  );
}

export default App;

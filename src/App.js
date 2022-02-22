import Main from './components/MainComponent';
import './App.css';
import { DISHES } from './shared/dishes';

function App() {
  const dishes = DISHES;
  
    return (
      <div className="App">
        <Main />
      </div>
    );
}

export default App;

import './App.css';
import LeftNav from './LeftNav';
import Todo from './Todo';
import FarLeftNav from './FarLeftNav';

function App() {
  return (
    <div className="app">
      <FarLeftNav />
      <LeftNav />
      <Todo />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatedRoutes />
    </div>
  );
}

export default App;

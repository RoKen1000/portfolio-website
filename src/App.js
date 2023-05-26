import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { useState } from 'react';

function App() {

  const [header, setHeader] = useState(false)

  return (
    <div className="App">
      {header && <Header/>}
      <AnimatedRoutes setHeader={setHeader}/>
    </div>
  );
}

export default App;
